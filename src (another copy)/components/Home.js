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

const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Actions = lazy(() => import('./Actions'));
const Table = lazy(() => import('./Table'));
const TrendTable = lazy(() => import('./TrendTable'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const Footer = lazy(() => import('./Footer'));
const Search = lazy(() => import('./Search'));
const Level = lazy(() => import('./Level'));
const MapSwitcher = lazy(() => import('./MapSwitcher'));
const StateHeader = lazy(() => import('./StateHeader'));
const Periodpicker = lazy(() => import('./Periodpicker'));


function Home() {
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


  const timeseries = require('../data/timeseries_india.json');


  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const {width} = useWindowSize();

  const [message, setMessage] = useState("Total");
  const [data, setData] = useState(require('../data/data_total.json'));

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
        <title>66A Zombie Tracker</title>
        <meta
          name="title"
          content="66A Zombie Tracker: Latest Map and Case Count"
        />
      </Helmet>

      <div className="Home">
        <div className={classnames('home-left', {expanded: expandTable})}>


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

 		 <StateHeader data={data['TT']} stateCode={'TT'} />

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
	<div className="home-left" style={{width: '70rem', minHeight:'30rem'}}>


	   {timeseries && (
		<Suspense fallback={<div />}>
		  <TimeseriesExplorer
		    stateCode="TT"
		    {...{
		      timeseries,
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

          {data && (
            <Suspense fallback={<div />}>
              <TrendTable 
                stateCode="TT"
                {...{
                  timeseries,
                  date,
                  regionHighlighted,
                  setRegionHighlighted,
                  expandTable,
                  setExpandTable,
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
