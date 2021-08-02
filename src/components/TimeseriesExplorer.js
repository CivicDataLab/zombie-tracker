import TimeseriesLoader from './loaders/Timeseries';

import {
  TIMESERIES_CHART_TYPES,
  TIMESERIES_LOOKBACKS,
  STATE_NAMES,
} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import {getIndiaYesterdayISO, parseIndiaDate} from '../utils/commonFunctions';

import {PinIcon, ReplyIcon} from '@primer/octicons-v2-react';
import classnames from 'classnames';
import {formatISO, sub} from 'date-fns';
import equal from 'fast-deep-equal';
import React, {useState, useCallback, useMemo, useRef, lazy, Suspense} from 'react';
import {useTranslation} from 'react-i18next';
import {useLocalStorage, useSessionStorage} from 'react-use';
import ReactTooltip from 'react-tooltip';

const Timeseries = lazy(() => import('./Timeseries'));
const Trendbar = lazy(() => import('./Trendbar'));
const TrendTable = lazy(() => import('./TrendTable'));
const TrendPendency = lazy(() => import('./TrendPendency'));
const TrendIntPenAnnual = lazy(() => import('./TrendIntPenAnnual'));
const TrendRelActs = lazy(() => import('./TrendRelActs'));
const TrendSections = lazy(() => import('./TrendSections'));

function TimeseriesExplorer({
  stateCode,
  timeseries,
  pendency,
  intpen,
  relatedact, 
  pocso,
  itact,
  ipc,
  crpc,
  date: timelineDate,
  regionHighlighted,
  setRegionHighlighted,
  anchor,
  setAnchor,
  expandTable,
}) {
  const [actdata, setActdata] = useState(itact);
  const {t} = useTranslation();
  const [lookback, setLookback] = useSessionStorage(
    'timeseriesLookback',
    TIMESERIES_LOOKBACKS.BEGINNING
  );
  const [chartType, setChartType] = useLocalStorage('chartType', 'total');
  const explorerElement = useRef();
  const isVisible = useIsVisible(explorerElement, {once: true});

  const selectedRegion = useMemo(() => {
    if (timeseries?.[regionHighlighted.stateCode]?.districts) {
      return {
        stateCode: regionHighlighted.stateCode,
        districtName: regionHighlighted.districtName,
      };
    } else {
      return {
        stateCode: regionHighlighted.stateCode,
        districtName: null,
      };
    }
  }, [timeseries, regionHighlighted.stateCode, regionHighlighted.districtName]);

  const selectedTimeseries = useMemo(() => {
    if (selectedRegion.districtName) {
      return timeseries?.[selectedRegion.stateCode]?.districts?.[
        selectedRegion.districtName
      ]?.dates;
    } else {
      return timeseries?.[selectedRegion.stateCode]?.dates;
    }
  }, [timeseries, selectedRegion.stateCode, selectedRegion.districtName]);

  const selectedPendency = useMemo(() => {
    if (selectedRegion.districtName) {
      return pendency?.[selectedRegion.stateCode]?.districts?.[
        selectedRegion.districtName
      ]?.pendency;
    } else {
      return pendency?.[selectedRegion.stateCode]?.pendency;
    }
  }, [pendency, selectedRegion.stateCode, selectedRegion.districtName]);

  const selectedIntpen = useMemo(() => {
    if (selectedRegion.districtName) {
      return intpen?.[selectedRegion.stateCode]?.districts?.[
        selectedRegion.districtName
      ]?.dates;
    } else {
      return intpen?.[selectedRegion.stateCode]?.dates;
    }
  }, [intpen, selectedRegion.stateCode, selectedRegion.districtName]);

  const selectedRelact = useMemo(() => {
    if (selectedRegion.districtName) {
      return relatedact?.[selectedRegion.stateCode]?.districts?.[
        selectedRegion.districtName
      ]?.act;
    } else {
      return relatedact?.[selectedRegion.stateCode]?.act;
    }
  }, [relatedact, selectedRegion.stateCode, selectedRegion.districtName]);

  const selectedSection = useMemo(() => {
    if (selectedRegion.districtName) {
      return actdata?.[selectedRegion.stateCode]?.districts?.[
        selectedRegion.districtName
      ]?.section;
    } else {
      return actdata?.[selectedRegion.stateCode]?.section;
    }
  }, [actdata, selectedRegion.stateCode, selectedRegion.districtName]);

  const regions = useMemo(() => {
    const states = Object.keys(timeseries || {})
      .filter((code) => code !== stateCode)
      .sort((code1, code2) =>
        STATE_NAMES[code1].localeCompare(STATE_NAMES[code2])
      )
      .map((code) => {
        return {
          stateCode: code,
          districtName: null,
        };
      });
    const districts = Object.keys(timeseries || {}).reduce((acc1, code) => {
      return [
        ...acc1,
        ...Object.keys(timeseries?.[code]?.districts || {}).reduce(
          (acc2, districtName) => {
            return [
              ...acc2,
              {
                stateCode: code,
                districtName: districtName,
              },
            ];
          },
          []
        ),
      ];
    }, []);

    return [
      {
        stateCode: stateCode,
        districtName: null,
      },
      ...states,
      ...districts,
    ];
  }, [timeseries, stateCode]);

  const dropdownRegions = useMemo(() => {
    if (
      regions.find(
        (region) =>
          region.stateCode === regionHighlighted.stateCode &&
          region.districtName === regionHighlighted.districtName
      )
    )
      return regions;
    return [
      ...regions,
      {
        stateCode: regionHighlighted.stateCode,
        districtName: regionHighlighted.districtName,
      },
    ];
  }, [regionHighlighted.stateCode, regionHighlighted.districtName, regions]);

  const dates = useMemo(() => {
    const today = timelineDate || getIndiaYesterdayISO();
    const pastDates = Object.keys(selectedTimeseries || {}).filter(
      (date) => date <= today
    );

    if (lookback === TIMESERIES_LOOKBACKS.TWO_WEEKS) {
      const cutOffDate = formatISO(sub(parseIndiaDate(today), {weeks: 2}), {
        representation: 'date',
      });
      return pastDates.filter((date) => date >= cutOffDate);
    } else if (lookback === TIMESERIES_LOOKBACKS.MONTH) {
      const cutOffDate = formatISO(sub(parseIndiaDate(today), {months: 1}), {
        representation: 'date',
      });
      return pastDates.filter((date) => date >= cutOffDate);
    }
    return pastDates;
  }, [selectedTimeseries, timelineDate, lookback]);

  const pendency_years = useMemo(() => {
    const today = timelineDate || getIndiaYesterdayISO();
    const pastDates = Object.keys(selectedPendency || {});
    return pastDates;
  }, [selectedPendency, timelineDate, lookback]);

  const relacts = useMemo(() => {
    const today = timelineDate || getIndiaYesterdayISO();
    const pastDates = Object.keys(selectedRelact || {});
    return pastDates;
  }, [selectedRelact, timelineDate, lookback]);

  const relacts_top = relacts.sort(function(a,b){return selectedRelact[b]-selectedRelact[a]}).slice(0,5);

  const sections = useMemo(() => {
    const today = timelineDate || getIndiaYesterdayISO();
    const pastDates = Object.keys(selectedSection || {});
    return pastDates;
  }, [selectedSection, timelineDate, lookback]);

  const sections_top = sections.sort(function(a,b){return selectedSection[b]-selectedSection[a]}).slice(0,10);

  const intpen_years = useMemo(() => {
    const today = timelineDate || getIndiaYesterdayISO();
    const pastDates = Object.keys(selectedIntpen || {});
    return pastDates;
  }, [selectedIntpen, timelineDate, lookback]);

  const handleChange = useCallback(
    ({target}) => {
      setRegionHighlighted(JSON.parse(target.value));
    },
    [setRegionHighlighted]
  );

  const resetDropdown = useCallback(() => {
    setRegionHighlighted({
      stateCode: stateCode,
      districtName: null,
    });
  }, [stateCode, setRegionHighlighted]);

  const [chart, setChart] = useState("line");
  const setbar = () => {
      setChart("bar");
    }
  const setline = () => {
      setChart("line");
    }
  const settable = () => {
      setChart("table");
    }
  const [act, setAct] = useState("POCSO");
  const handleactselect = (event) => {
	setAct(event.target.value);
        let value = event.target.value;
        setActdata(value == "POCSO" ? pocso : (value == "ITAct" ? itact : (value == "IPC" ? ipc : crpc )));
  }

  // alert (JSON.stringify(pendency_years));

  return (
    <div
      className={classnames(
        'TimeseriesExplorer fadeInUp',
        {
          stickied: anchor === 'timeseries',
        },
        {expanded: expandTable}
      )}
      style={{display: anchor === 'mapexplorer' ? 'none' : ''}}
      ref={explorerElement}
    >
      <div className="timeseries-header">
        <div
          className={classnames('anchor', {
            stickied: anchor === 'timeseries',
          })}
          onClick={
            setAnchor &&
            setAnchor.bind(this, anchor === 'timeseries' ? null : 'timeseries')
          }
        >
          
        </div>

 
        <h1>{t('Registration, Pendency and Disposal of 66A cases')}</h1>
	      {dropdownRegions && (
		<div className="state-selection">
		  <div className="dropdown">
		    <select
		      value={JSON.stringify(selectedRegion)}
		      onChange={handleChange}
		    >
		      {dropdownRegions
		        .filter(
		          (region) =>
		            STATE_NAMES[region.stateCode] !== region.districtName
		        )
		        .map((region) => {
		          return (
		            <option
		              value={JSON.stringify(region)}
		              key={`${region.stateCode}-${region.districtName}`}
		            >
		              {region.districtName
		                ? t(region.districtName)
		                : t(STATE_NAMES[region.stateCode])}
		            </option>
		          );
		        })}
		    </select>
		  </div>
		  <div className="reset-icon" onClick={resetDropdown}>
		    <ReplyIcon />
		  </div>
		</div>
	      )}

      </div>
    <div className="notif" style={{display:'flex', marginTop:'1em'}}>
	     <i className="fa fa-info-circle" aria-hidden="true" style={{fontSize:'20px', marginRight:'10px'}}></i>
	     <p>In the graphs below, the dotted line shows the year 2015 when Supreme Court decision came in Shreya Singhal v Union of India (24th March 2015) declaring Sec 66A of the Information Technology Act,2000 as unconstitutional.</p>
    </div>


      <div className="Timeseries">

	      {isVisible && (
		<Suspense fallback={<TimeseriesLoader />}>
		  <Timeseries
		    timeseries={selectedTimeseries}
		    regionHighlighted={selectedRegion}
		    {...{dates, chartType}}
		  />
		</Suspense>
	      )}

	     {(
		<Suspense fallback={<TimeseriesLoader />}>
	  	<Trendbar
		    timeseries={selectedTimeseries}
		    regionHighlighted={selectedRegion}
		    {...{dates, chartType}}
		  />
		</Suspense>
	      )}

	     {(
		<Suspense fallback={<TimeseriesLoader />}>
	  	<TrendPendency
		    timeseries={selectedPendency}
		    regionHighlighted={selectedRegion}
		    {...{pendency_years, chartType}}
		  />
		</Suspense>
	      )}


     </div>

      {!isVisible && <div style={{height: '50rem'}} />}

      {/*<div className="pills">
        {Object.values(TIMESERIES_LOOKBACKS).map((option) => (
          <button
            key={option}
            type="button"
            className={classnames({selected: lookback === option})}
            onClick={() => setLookback(option)}
          >
            {t(option)}
          </button>
        ))}
      </div> */}




    {/*<h1 style={{'color':'#6c757d', marginTop:'5rem'}}>{t('Acts clubbed with section 66A of the IT act')}</h1>
    <div className="Timeseries">

     {selectedRelact && (
        <Suspense fallback={<TimeseriesLoader />}>
  	<TrendRelActs
            timeseries={selectedRelact}
            regionHighlighted={selectedRegion}
            {...{relacts_top, chartType}}
          />
        </Suspense>
      )}

    </div>


     <div className="timeseries-header" style={{marginTop:'0rem'}}>
     	<h1 style={{'color':'#6c757d'}}>{t('Sections from other acts that are clubbed with section 66A of the IT act')}</h1>
	<div className="state-selection">
	  <div className="dropdown">
	    <select name='act' id="act" onChange={(e) => handleactselect(e)}>
		    <option value='POCSO'>The Protection of Children from Sexual Offences Act, 2012 </option>
		    <option value='ITAct'>Information Technology Act, 2000</option>
		    <option value='IPC'>Indian Penal Code, 1860</option>
		    <option value='CRPC'>Criminal Procedure Code, 1973 </option>
	    </select>
	  </div>
	</div>
     </div>
    <div className="Timeseries">

     {selectedSection &&  (
        <Suspense fallback={<TimeseriesLoader />}>
  	<TrendSections
            key= {act}
            timeseries={selectedSection}
            regionHighlighted={selectedRegion}
            {...{sections_top, chartType}}
          />
        </Suspense>
      )}

    </div>*/}

     <div className="timeseries-header" style={{marginTop:'5rem'}}>
     	<h1 style={{'color':'#6c757d'}}>{t('Acts clubbed with section 66A of the IT act')}</h1>
	<div className="state-selection">
	  <div className="dropdown">
	    <select name='act' id="act" onChange={(e) => handleactselect(e)}>
		    <option value='ITAct'>Information Technology Act, 2000</option>
		    <option value='IPC'>Indian Penal Code, 1860</option>
		    <option value='POCSO'>The Protection of Children from Sexual Offences Act, 2012 </option>
		    <option value='CRPC'>Criminal Procedure Code, 1973 </option>
	    </select>
	  </div>
	</div>
     </div>
    <div className="notif" style={{display:'flex', marginTop:'1em'}}>
	     <i className="fa fa-info-circle" aria-hidden="true" style={{fontSize:'20px', marginRight:'10px'}}></i>
	     <p>In the graphs below we intend to show the acts and sections that are often clubbed with cases registered under section 66A of the Information Technology Act, 2000. </p>
    </div>
    <div className="Timeseries">

     {selectedRelact && (
        <Suspense fallback={<TimeseriesLoader />}>
  	<TrendRelActs
            timeseries={selectedRelact}
            regionHighlighted={selectedRegion}
            {...{relacts_top, chartType}}
          />
        </Suspense>
      )}

     {selectedSection &&  (
        <Suspense fallback={<TimeseriesLoader />}>
  	<TrendSections
            key= {act}
            timeseries={selectedSection}
            regionHighlighted={selectedRegion}
            {...{sections_top, chartType}}
          />
        </Suspense>
      )}

    </div>


    {selectedIntpen && (
    <React.Fragment>
	    <div className="timeseries-header">
		    <h1 style={{'color':'#6c757d'}}>{t('Internet Penetration Vs Case Count')}</h1>
	    </div>

	    <div className="notif" style={{display:'flex', marginTop:'1em'}}>
		     <i className="fa fa-info-circle" aria-hidden="true" style={{fontSize:'20px', marginRight:'10px'}}></i>
		     <p>In the graph below we compare the total of cases registered under Section 66A of the Information Technology Act, 2000 with the total annual internet subscriptions for the selected states between 2014 - 2019. Information on Internet Subscription Data is obtained from the Telecom Statistics of India’(TSI), an annual publication by the Economic Research Unit of Department of Telecommunications, Ministry of Communications. <a href="https://dot.gov.in/sites/default/files/Telecom%20Statistics%20India-2019.pdf" target="_blank">Link to the report</a></p>
	    </div>

	    <div className="Timeseries">
	      
	      {selectedIntpen && (
		<Suspense fallback={<TimeseriesLoader />}>
		  <TrendIntPenAnnual
		    timeseries={selectedIntpen}  
		    regionHighlighted={selectedRegion}
		    {...{intpen_years, chartType}}
		  />
		</Suspense>
	      )}
	    </div>

    </React.Fragment>
    )}


      <h1 style={{'color':'#6c757d'}}>{t('Case load (Year on Year)')}</h1>
      {selectedTimeseries && (
            <Suspense fallback={<div />}>
              <TrendTable 
		    timeseries={selectedTimeseries}
		    regionHighlighted={selectedRegion}
		    {...{dates, chartType}}
              />
            </Suspense>
       )}

     <div className="notif" style={{display:'flex', marginBottom:'3em'}}>
	     <i className="fa fa-info-circle" aria-hidden="true" style={{fontSize:'20px', marginRight:'10px'}}></i>
	     <p>In case you face technical issues in accessing the website, or observe factual inconsistencies, consider sharing it by writing us at <a href="mailto:info@internetfreedom.in" target="_blank">info@internetfreedom.in</a>. You can also raise an issue  <a href="https://github.com/CivicDataLab/stop-66A/issues" target="_blank">here</a>.</p>
     </div>




    </div>
  );
}

const isEqual = (prevProps, currProps) => {
  if (currProps.forceRender) {
    return false;
  } else if (!currProps.timeseries && prevProps.timeseries) {
    return true;
  } else if (currProps.timeseries && !prevProps.timeseries) {
    return false;
  } else if (
    !equal(
      currProps.regionHighlighted.stateCode,
      prevProps.regionHighlighted.stateCode
    )
  ) {
    return false;
  } else if (
    !equal(
      currProps.regionHighlighted.districtName,
      prevProps.regionHighlighted.districtName
    )
  ) {
    return false;
  } else if (!equal(currProps.date, prevProps.date)) {
    return false;
  } else if (!equal(currProps.anchor, prevProps.anchor)) {
    return false;
  } else if (!equal(currProps.expandTable, prevProps.expandTable)) {
    return false;
  }
  return true;
};

export default React.memo(TimeseriesExplorer, isEqual);
