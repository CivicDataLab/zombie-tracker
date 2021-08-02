import DeltaBarGraph from './DeltaBarGraph';
import CaseBarGraph from './CaseBarGraph';
import Footer from './Footer';
import Level from './Level';
import MapSwitcher from './MapSwitcher';
import StateHeader from './StateHeader';
import StateMeta from './StateMeta';


import {API_ROOT_URL, STATE_NAMES} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import {fetcher, formatNumber, getStatistic} from '../utils/commonFunctions';

import classnames from 'classnames';
import React, {
  useMemo,
  useState,
  useEffect,
  lazy,
  Suspense,
  useRef,
} from 'react';
import {Smile} from 'react-feather';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {useSessionStorage} from 'react-use';
import useSWR from 'swr';
import {useLocalStorage} from 'react-use';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';

const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const StateTable = lazy(() => import('./StateTable'));
const Periodpicker = lazy(() => import('./Periodpicker'));
const Search = lazy(() => import('./Search'));

function State({message, setMessage, state, setState}) {
  const {t} = useTranslation();

  const stateCode = useParams().stateCode.toUpperCase();

  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'pending'
  );
  const [showAllDistricts, setShowAllDistricts] = useState(false);
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: stateCode,
    districtName: null,
  });

  const [expandTable, setExpandTable] = useLocalStorage('expandTable', false);

  useEffect(() => {
    if (regionHighlighted.stateCode !== stateCode) {
      setRegionHighlighted({
        stateCode: stateCode,
        districtName: null,
      });
      setShowAllDistricts(false);
    }
  }, [regionHighlighted.stateCode, stateCode]);

  {/*const {data: timeseries, error: timeseriesResponseError} = useSWR(
    `${API_ROOT_URL}/timeseries-${stateCode}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );*/}

  const timeseries_data = require('../data/timeseries_state.json');
  const timeseries = {};
  timeseries[stateCode] = timeseries_data[stateCode];

  const pendency_data = require('../data/case_pendency_state.json');
  const pendency = {};
  pendency[stateCode] = pendency_data[stateCode];

  const relatedact_data = require('../data/related_acts_state.json');
  const relatedact = {};
  relatedact[stateCode] = relatedact_data[stateCode];   

  const intpen_data = require('../data/internet_india.json');
  const intpen = {};
  intpen[stateCode] = intpen_data[stateCode];

  const pocso_data    = require('../data/pocso_state.json');
  const pocso = {};
  pocso[stateCode] = pocso_data[stateCode];

  const itact_data    = require('../data/itact_state.json');
  const itact = {};
  itact[stateCode] = itact_data[stateCode];

  const ipc_data    = require('../data/ipc_state.json');
  const ipc = {};
  ipc[stateCode] = ipc_data[stateCode];

  const crpc_data    = require('../data/crpc_state.json');
  const crpc = {};
  crpc[stateCode] = crpc_data[stateCode];


  const fetchdata = () => {

	 const fromdate = state[0].startDate.getDate() + '-' + (state[0].startDate.getMonth()+1) + '-' + state[0].startDate.getFullYear()
	 const todate = state[0].endDate.getDate() + '-' + (state[0].endDate.getMonth()+1) + '-' + state[0].endDate.getFullYear();
	 const url = 'https://zombietracker.in/main/data_66a_cases/' + fromdate + '/' + todate + '/'; 	
         let data1 = ""	
	 $.ajax({
		url: url,
		dataType: 'json',
		async: false,
		success: function(data){
					data1 = data;
		                       },
		error: function(xhr, status, error) { 
				alert('No Data'); 
                                setMessage("Total");  
                                data1 =  require('../data/data_total.json')
				}
				
		 }); 
	return data1
      
    }


  // alert(JSON.stringify(pendency)); 
  // const [message, setMessage] = useState("Total");
  // const [data, setData] = useState(require('../data/data_total.json'));
  const [data, setData] = useState( message == "Total" ? require('../data/data_total.json') : message == "Before" ? require('../data/data_pre.json') :  message.includes("other") ? fetchdata : require('../data/data_post.json') ) ;


  const updateTotal = () => {
      setMessage("Total");
      setData(require('../data/data_total.json'));
  }

  const updateBefore = () => {
      setMessage("Before");
      setData(require('../data/data_pre.json'));
  }

  const updateAfter = () => {
      setMessage("After");
      setData(require('../data/data_post.json'));
  }

  const datastate = data[stateCode];
  const casetimeseries = [{"name":"IT 66 AA", "value":400},{"name":"IPC Section 66A", "value":300}, {"name":"IT Act", "value":250}, {"name":"IPC 66 (A)", "value":150}, {"name":"IPC Section-66a", "value":150}] 

  const toggleShowAllDistricts = () => {
    setShowAllDistricts(!showAllDistricts);
  };

  const handleSort = (districtNameA, districtNameB) => {
    const districtA = data[stateCode].districts[districtNameA];
    const districtB = data[stateCode].districts[districtNameB];
    return (
      getStatistic(districtB, 'total', mapStatistic) -
      getStatistic(districtA, 'total', mapStatistic)
    );
  };

  const gridRowCount = useMemo(() => {
    if (!data) return;
    const gridColumnCount = window.innerWidth >= 540 ? 3 : 2;
    const districtCount = data[stateCode]?.districts
      ? Object.keys(data[stateCode].districts).filter(
          (districtName) => districtName !== 'Unknown'
        ).length
      : 0;
    const gridRowCount = Math.ceil(districtCount / gridColumnCount);
    return gridRowCount;
  }, [data, stateCode]);

  const stateMetaElement = useRef();
  const isStateMetaVisible = useIsVisible(stateMetaElement, {once: true});

  const trail = useMemo(() => {
    const styles = [];

    [0, 0, 0, 0].map((element, index) => {
      styles.push({
        animationDelay: `${index * 250}ms`,
      });
      return null;
    });
    return styles;
  }, []);

  const lookback = showAllDistricts ? (window.innerWidth >= 540 ? 10 : 8) : 6;

  const [ismap, setIsmap] = useState(true);
  const togglemap = () => {
      setIsmap(!ismap);
      // alert (ismap);
    }

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Zombie Tracker - {STATE_NAMES[stateCode]} 
        </title>
        <meta
          name="title"
          content={`Zombie Tracker - ${STATE_NAMES[stateCode]}: ITACT Section 66A Case Count`}
        />
      </Helmet>

   {/* <div className="Home">
	<div className="home-full-width">


	  <div style={{marginBottom: '1rem'}}>
		 <Periodpicker 
			      {...{data, setData}}
			      {...{message, setMessage}}
	  /> </div>

	  <div style={{alignSelf:'flex-start', marginBottom: '1rem'}}>
		<button className="btn btn-secondary" style={message == "Total"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateTotal}> Total </button>
	        <button className="btn btn-secondary" style={message == "Before"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateBefore}> Pre-Judgement </button>
	        <button className="btn btn-secondary" style={message == "After"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateAfter}> Post-Judgement </button>
	  </div>


	</div>
   </div> */}

      <div className="State">
        <div className="state-left">

          {/*<div className="header">
            <Suspense fallback={<div />}>
              <Search />
            </Suspense>
          </div>*/}

	 <StateHeader data={data?.[stateCode]} stateCode={stateCode} />



	  <div style={{alignSelf:'left', marginBottom: '1rem'}}>
		<button data-tip='View Table'  data-for="maptoggleTip" className="btn btn-secondary" style={ismap == false? {background:'#111352', color:'#A7E3E7'} : {}} onClick={togglemap}> <i className="fa fa-table" aria-hidden="true"></i></button>
	        <button data-tip='View Map'  data-for="maptoggleTip" className="btn btn-secondary" style={ismap == true? {background:'#111352', color:'#A7E3E7'} : {}} onClick={togglemap}> <i className="fa fa-map" aria-hidden="true"></i> </button>
		 <ReactTooltip id="maptoggleTip" place="top" effect="solid">  
		 </ReactTooltip>
	  </div>



          {!ismap && data && (
            <Suspense fallback={<div />}>
              <StateTable
                key= {message}
                {...{
                  stateCode,
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  expandTable,
                  setExpandTable,
                }}
              />
            </Suspense>
          )}



          {ismap && data && (
            <Suspense fallback={<div style={{minHeight: '50rem'}} />}>
              
              <MapExplorer
                {...{
                  stateCode,
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  mapStatistic,
                  setMapStatistic,
                }}
              ></MapExplorer>
            </Suspense>
          )}


          {/* <span ref={stateMetaElement} /> */}

          {/*<CaseBarGraph
            timeseries={casetimeseries}
          />*/}

        </div>

        <div className="state-right">
          <React.Fragment>

	  <div style={{alignSelf:'center', marginBottom: '16px'}}>
		 <Periodpicker 
			      {...{data, setData}}
			      {...{message, setMessage}}
                              {...{state, setState}}
	  /> </div>

	  <div style={{alignSelf:'flex-start', marginBottom: '46px'}}>
		<button data-tip='Cases instituted between 27/10/2009 to 15/02/2020' data-for="btnTip" className="btn btn-secondary" style={message == "Total"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateTotal}> Total </button>

		<button data-tip='Cases instituted prior to the decision of the Supreme Court in Shreya Singhal v Union of India (24th March 2015) declaring Sec 66A of the Information Technology Act,2000 as unconstitutional.' data-for="btnTip" className="btn btn-secondary" style={message == "Before"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateBefore}> Pre-Judgment </button>

		<button data-tip='Cases instituted post the decision of Supreme Court in Shreya Singhal v Union of India (24th March 2015) declaring Sec 66A of the Information Technology Act,2000 as unconstitutional.' data-for="btnTip" className="btn btn-secondary" style={message == "After"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateAfter}> Post-Judgment </button>

	      <ReactTooltip id="btnTip" place="top" effect="solid" getContent={(dataTip) => <div style={{width:'450px', textAlign:"center"}}><h3>{dataTip}</h3></div> }>  
	      </ReactTooltip>

	  </div>


          <div style={{position: 'relative'}}>
            <MapSwitcher {...{mapStatistic, setMapStatistic}} /> 
            <Level key= {message} data={data?.[stateCode]} />
            {/*<Minigraphs
              timeseries={timeseries?.[stateCode]?.dates}
              {...{stateCode}}
              
            />*/}
          </div>


          </React.Fragment>
        </div>
      </div>

   <div className="Home">
	<div className="home-full-width" style={{minHeight:'30rem'}}>


            <Suspense fallback={<div />}>
              <TimeseriesExplorer
                {...{
                  stateCode,
                  timeseries,
                  pendency,
                  intpen,
                  relatedact,
		  pocso,
                  itact,
                  ipc,
                  crpc,
                  regionHighlighted,
                  setRegionHighlighted,
                }}
                
              />
            </Suspense>

        </div>
   </div>

    </React.Fragment>
  );
}

export default React.memo(State);
