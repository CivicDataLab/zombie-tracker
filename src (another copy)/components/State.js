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

const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const StateTable = lazy(() => import('./StateTable'));
const Periodpicker = lazy(() => import('./Periodpicker'));
const Search = lazy(() => import('./Search'));

function State() {
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

  // alert(JSON.stringify(timeseries)); 


  const [message, setMessage] = useState("Total");
  const [data, setData] = useState(require('../data/data_total.json'));

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
          66A Zombie Tracker - {STATE_NAMES[stateCode]} 
        </title>
        <meta
          name="title"
          content={`66A Zombie Tracker - ${STATE_NAMES[stateCode]}: Latest Map and Case Count`}
        />
      </Helmet>

      <div className="State">
        <div className="state-left">

          <div className="header">
            <Suspense fallback={<div />}>
              <Search />
            </Suspense>
          </div>

	  <div style={{alignSelf:'left', marginBottom: '1rem'}}>
		<button className="btn btn-secondary" style={ismap == false? {background:'black', color:'white', width:'11rem', borderRadius:'20px'} : {width:'11rem', borderRadius:'20px'}} onClick={togglemap}> Table </button>
	        <button className="btn btn-secondary" style={ismap == true? {background:'black', color:'white', width:'11rem', borderRadius:'20px'} : {width:'11rem', borderRadius:'20px'}} onClick={togglemap}> Map </button>
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


	  <div style={{marginBottom: '3rem', marginTop: '4rem'}}>
		 <Periodpicker 
			      {...{data, setData}}
			      {...{message, setMessage}}
	  /> </div>

         <div style={{alignSelf:'center', marginBottom: '1rem'}}>
			<button className="btn btn-secondary" style={message == "Total"? {background:'black', color:'white', width:'11rem', borderRadius:'20px'} : {width:'11rem', borderRadius:'20px'}} onClick={updateTotal}> Total </button>
		        <button className="btn btn-secondary" style={message == "Before"? {background:'black', color:'white', width:'11rem', borderRadius:'20px'} : {width:'11rem', borderRadius:'20px'}} onClick={updateBefore}> Pre-Judgement </button>
		        <button className="btn btn-secondary" style={message == "After"? {background:'black', color:'white', width:'11rem', borderRadius:'20px'} : {width:'11rem', borderRadius:'20px'}} onClick={updateAfter}> Post-Judgement </button>
	</div>

	 <StateHeader data={data?.[stateCode]} stateCode={stateCode} />


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
	<div className="home-left" style={{width: '70rem', minHeight:'30rem'}}>


            <Suspense fallback={<div />}>
              <TimeseriesExplorer
                {...{
                  stateCode,
                  timeseries,
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
