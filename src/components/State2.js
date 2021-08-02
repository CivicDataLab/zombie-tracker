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

  const timeseries_data = require('../timeseries_state.json');
  const timeseries = {};
  timeseries[stateCode] = timeseries_data[stateCode];

  // alert(JSON.stringify(timeseries)); 

  {/*const {data} = useSWR(`${API_ROOT_URL}/data.min.json`, fetcher, {
    revalidateOnMount: true,
    refreshInterval: 100000,
  });*/}

  //const data      = require('/home/abhinav/covid19india-react/src/result.json');


  const [message, setMessage] = useState("Total");
  const [data, setData] = useState(require('../result.json'));
  const updateTotal = () => {
      setMessage("Total");
      setData(require('../result.json'));
  }

  const updateBefore = () => {
      setMessage("Before");
      setData(require('../result_pre.json'));
  }

  const updateAfter = () => {
      setMessage("After");
      setData(require('../result_post.json'));
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


      <div className="Home">

          <div className="header">
            <Suspense fallback={<div />}>
              <Search />
            </Suspense>
          </div>

          <div style={{alignSelf:'top', marginLeft: '5rem'}}>
		<button className="btn btn-secondary" style={message == "Total"? {background:'black', color:'white', marginRight:'0.5rem'} : {marginRight:'0.5rem'}} onClick={updateTotal}> Total </button>
                <button className="btn btn-secondary" style={message == "Before"? {background:'black', color:'white', marginRight:'0.5rem'} : {marginRight:'0.5rem'}} onClick={updateBefore}> Pre (24-03-2015) </button>
                <button className="btn btn-secondary" style={message == "After"? {background:'black', color:'white'} : {}} onClick={updateAfter}> Post (24-03-2015) </button>
	  </div>

          <div style={{marginLeft: '2rem'}}><Periodpicker
                      {...{data, setData}}
                      {...{message, setMessage}}
         /> </div>

      </div>



      <div className="Home" style={{paddingTop: '1rem',}}>

         <StateHeader data={data?.[stateCode]} stateCode={stateCode} />

          <div style={{position: 'relative', marginTop: '1rem', marginBottom: '1rem',}}>
            <MapSwitcher {...{mapStatistic, setMapStatistic}} />
            <Level key= {message} data={data?.[stateCode]} />
            <Minigraphs
              timeseries={timeseries?.[stateCode]?.dates}
              {...{stateCode}}
              
            />
          </div>

      </div>


      <div className="Home" style={{paddingTop: '1rem',}}>

          {data && (
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


          {data && (
          <div
          className={classnames('map-container', {
            expanded: expandTable,
          })}
          >
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
          </div>
          )}

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

      <div style={{width:'30%', alignSelf:'center'}}>
		  <CaseBarGraph
		    timeseries={casetimeseries}
		  />
      </div>


    </React.Fragment>
  );
}

export default React.memo(State);
