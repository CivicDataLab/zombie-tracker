import {API_ROOT_URL} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {fetcher} from '../utils/commonFunctions';
import CaseBarGraph from './CaseBarGraph';
import $ from 'jquery'; 

import classnames from 'classnames';
import React, {useState, useRef, lazy, Suspense, useCallback} from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';
import ReactTooltip from 'react-tooltip';

const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Actions = lazy(() => import('./Actions'));
const Table = lazy(() => import('./Table'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const Footer = lazy(() => import('./Footer'));
const Search = lazy(() => import('./Search'));
const Level = lazy(() => import('./Level'));
const MapSwitcher = lazy(() => import('./MapSwitcher'));
const StateHeader = lazy(() => import('./StateHeader'));
const Periodpicker = lazy(() => import('./Periodpicker'));


function Home({message, setMessage, state, setState}) {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useLocalStorage('anchor', null);
  const [expandTable, setExpandTable] = useLocalStorage('expandTable', false);
  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'pending'
  );
  const [date, setDate] = useState('');
  const location = useLocation();


  const timeseries  = require('../data/timeseries_india.json');
  const pendency    = require('../data/case_pendency_india.json');
  const intpen      = require('../data/internet_india.json');
  const relatedact  = require('../data/related_acts_india.json');
  const pocso	    = require('../data/pocso_india.json');
  const itact	    = require('../data/itact_india.json');
  const ipc         = require('../data/ipc_india.json');
  const crpc        = require('../data/crpc_india.json');

  // alert(JSON.stringify(intpen))


  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const {width} = useWindowSize();

  // const [message, setMessage] = useState("Total");
  const [data, setData] = useState( message == "Total" ? require('../data/data_total.json') : message == "Before" ? require('../data/data_pre.json') : require('../data/data_post.json') ) ;

  const updateTotal = () => {
      setMessage("Total");
      setData(require('../data/data_total.json'));
  }

  const updateBefore = () => {
      setMessage("Before");
      setData(require('../data/data_pre.json'));
      //alert(data['TT']['total']['total']);
  }

  const updateAfter = () => {
      setMessage("After");
      setData(require('../data/data_post.json'));
  }

  const casetimeseries = [{"name":"IT 66 AA", "value":400},{"name":"IPC Section 66A", "value":300}, {"name":"IT Act", "value":250}, {"name":"IPC 66 (A)", "value":150}, {"name":"IPC Section-66a", "value":150}]
  const lookback = 6;
  const stateCode = 'TT';

  const [ismap, setIsmap] = useState(true);
  const togglemap = () => {
      setIsmap(!ismap);
      // alert (ismap);
    }

  return (
    <React.Fragment>
      <Helmet>
        <title>Zombie Tracker</title>
        <meta
          name="title"
          content="Zombie Tracker: ITACT Section 66A Case Count"
        />
      </Helmet>


  <div className="Home">
	<div className="home-full-width notif">
	     <i className="fa fa-info-circle" aria-hidden="true" style={{fontSize:'20px', marginRight:'10px'}}></i>
	     <p>Currently, we have only considered cases that were registered between 27/10/2009 and 15/02/2020 in these states Assam, Andhra Pradesh, Delhi, Jharkhand, Karnataka, Maharashtra, Rajasthan, Tamil Nadu, Telangana, Uttar Pradesh and West Bengal . We're working to add more states and to keep the tracker updated with status of pending cases in the selected states. Please read more on the data collection methodology <a href="/methodology/methodology/">here</a></p>
        </div>
  </div>


   {/* <div className="Home">
	<div className="home-full-width">


	  <div style={{marginBottom: '0rem'}}>
		 <Periodpicker 
			      {...{data, setData}}
			      {...{message, setMessage}}
	  /> </div>

	  <div style={{alignSelf:'flex-start', marginBottom: '0rem'}}>
		<button className="btn btn-secondary" style={message == "Total"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateTotal}> Total </button>
	        <button className="btn btn-secondary" style={message == "Before"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateBefore}> Pre-Judgement </button>
	        <button className="btn btn-secondary" style={message == "After"? {background:'#111352', color:'#A7E3E7', width:'11rem', height:'40px', borderRadius:'16px'} : {background:'#D8CFC7', width:'11rem', height:'40px', borderRadius:'16px'}} onClick={updateAfter}> Post-Judgement </button>
	  </div>


	</div>
   </div> */}

      <div className="Home">
        <div className={classnames('home-left', {expanded: expandTable})}>


          {/*<div className="header">
            <Suspense fallback={<div />}>
              <Search />
            </Suspense>
          </div>*/}

	  <StateHeader data={data['TT']} stateCode={'TT'} /> 
	 

	  <div style={{alignSelf:'left', marginBottom: '1rem'}}>
		<button data-tip='View Table'  data-for="maptoggleTip" className="btn btn-secondary" style={ismap == false? {background:'#111352', color:'#A7E3E7'} : {}} onClick={togglemap}> <i className="fa fa-table" aria-hidden="true"></i></button>
	        <button data-tip='View Map'  data-for="maptoggleTip" className="btn btn-secondary" style={ismap == true? {background:'#111352', color:'#A7E3E7'} : {}} onClick={togglemap}> <i className="fa fa-map" aria-hidden="true"></i> </button>
		 <ReactTooltip id="maptoggleTip" place="top" effect="solid">  
		 </ReactTooltip>
	  </div>

          {!ismap && data && (
            <Suspense fallback={<div />}>
              <Table
                key= {message}  
                {...{
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  expandTable,
                  setExpandTable,
                }}
              />
            </Suspense>
          )}


          {ismap && (isVisible || location.hash) && (
            <React.Fragment>
              {data && (
                <div
                  className={classnames('map-container', {
                    expanded: expandTable,
                  })}
                >

                  <Suspense fallback={<div style={{height: '50rem'}} />}>
                  
                    <MapExplorer
                      stateCode="TT"
                      {...{data}}
                      {...{mapStatistic, setMapStatistic}}
                      {...{regionHighlighted, setRegionHighlighted}}
                      {...{anchor, setAnchor}}
                      {...{expandTable}}
                    />
                  </Suspense>
                </div>
              )}


            </React.Fragment>
          )}


          {/*<CaseBarGraph
            timeseries={casetimeseries}
          />*/}

        </div>



        <div
          className={classnames('home-right', {expanded: expandTable})}
          ref={homeRightElement}
        >


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


		  <div style={{position: 'relative', marginTop: '1rem', marginBottom: '1rem'}}>
		    {data && (
		      <Suspense fallback={<div style={{height: '50rem'}} />}>
		        {width > 769 && (
		          <MapSwitcher {...{mapStatistic, setMapStatistic}} />
		        )}
		        <Level key= {message} data={data['TT']} />
		      </Suspense>
		    )}
                    {/* <Level key= {message} data={data['TT']} /> */}
		    {/*{timeseries && (
		      <Suspense fallback={<div style={{height: '50rem'}} />}>
		        <Minigraphs timeseries={timeseries['TT']?.dates} {...{date}} />
		      </Suspense>
		    )}*/}
		  </div>


        </div>
      </div>

   <div className="Home">
	<div className="home-full-width" style={{minHeight:'30rem'}}>


	   {timeseries && (
		<Suspense fallback={<div />}>
		  <TimeseriesExplorer
		    stateCode="TT"
		    {...{
		      timeseries,
                      pendency,
                      intpen,
                      relatedact, 
		      pocso,
                      itact,
                      ipc,
                      crpc,
		      date,
		      regionHighlighted,
		      setRegionHighlighted,
		      anchor,
		      setAnchor,
		      expandTable,
		    }}
		  />
		</Suspense>
	    )}


        </div>
   </div>


    </React.Fragment>
  );
}

export default Home;
