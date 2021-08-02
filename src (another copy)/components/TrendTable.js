import HeaderCell from './HeaderCell';
import TableLoader from './loaders/Table';
import TableDeltaHelper from './snippets/TableDeltaHelper';

import {TABLE_FADE_IN, TABLE_FADE_OUT} from '../animations';
import {
  DISTRICT_TABLE_COUNT,
  STATE_NAMES,
  TABLE_STATISTICS,
  TABLE_STATISTICS_EXPANDED,
  UNASSIGNED_STATE_CODE,
} from '../constants';

import useIsVisible from '../hooks/useIsVisible';
import {getIndiaYesterdayISO, parseIndiaDate} from '../utils/commonFunctions';
import {getStatistic} from '../utils/commonFunctions';

import {PinIcon, ReplyIcon} from '@primer/octicons-v2-react';
import {formatISO, sub} from 'date-fns';

import {
  TIMESERIES_CHART_TYPES,
  TIMESERIES_LOOKBACKS,
  TIMESERIES_STATISTICS,
} from '../constants';

import {
  FilterIcon,
  FoldDownIcon,
  InfoIcon,
  OrganizationIcon,
  QuestionIcon,
} from '@primer/octicons-v2-react';
import classnames from 'classnames';
import equal from 'fast-deep-equal';
import produce from 'immer';
import React, {useCallback, useEffect, useState, lazy} from 'react';
import {useMemo, useRef, Suspense} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {useTrail, useTransition, animated, config} from 'react-spring';
import {useLocalStorage, useSessionStorage} from 'react-use';
// eslint-disable-next-line
import worker from 'workerize-loader!../workers/getDistricts';

const Row = lazy(() => import('./Row'));

function TrendTable({
  stateCode,
  timeseries,
  date: timelineDate,
  regionHighlighted,
  setRegionHighlighted,
  expandTable,
  setExpandTable,
}) {
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

  const handleChange = useCallback(
    ({target}) => {
      setRegionHighlighted(JSON.parse(target.value));
    },
    [setRegionHighlighted]
  );



   const [sortData, setSortData] = useSessionStorage('sortData', {
    sortColumn: 'confirmed',
    isAscending: false,
    delta: false,
  });

  const [isPerMillion, setIsPerMillion] = useState(false);

  const handleSortClick = useCallback(
    (statistic) => {
      if (sortData.sortColumn !== statistic) {
        setSortData(
          produce(sortData, (draftSortData) => {
            draftSortData.sortColumn = statistic;
          })
        );
      } else {
        setSortData(
          produce(sortData, (draftSortData) => {
            draftSortData.isAscending = !sortData.isAscending;
          })
        );
      }
    },
    [sortData, setSortData]
  );

     {/*const trail = useTrail(3, {
    from: {transform: 'translate3d(0, 10px, 0)', opacity: 0},
    to: {transform: 'translate3d(0, 0px, 0)', opacity: 1},
    config: config.wobbly,
  });

  const [districts, setDistricts] = useState();

  const [tableOption, setTableOption] = useState('States');

  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const sortingFunction = useCallback(
    (regionKeyA, regionKeyB) => {
      if (sortData.sortColumn !== 'regionName') {
        const statisticA = getStatistic(
          districts?.[regionKeyA] || states[regionKeyA],
          sortData.delta ? 'delta' : 'total',
          sortData.sortColumn,
          isPerMillion
        );
        const statisticB = getStatistic(
          districts?.[regionKeyB] || states[regionKeyB],
          sortData.delta ? 'delta' : 'total',
          sortData.sortColumn,
          isPerMillion
        );
        return sortData.isAscending
          ? statisticA - statisticB
          : statisticB - statisticA;
      } else {
        const regionNameA =
          districts?.[regionKeyA]?.districtName || STATE_NAMES[regionKeyA];
        const regionNameB =
          districts?.[regionKeyB]?.districtName || STATE_NAMES[regionKeyB];
        return sortData.isAscending
          ? regionNameA.localeCompare(regionNameB)
          : regionNameB.localeCompare(regionNameA);
      }
    },
    [
      districts,
      isPerMillion,
      sortData.delta,
      sortData.isAscending,
      sortData.sortColumn,
      states,
    ]
  );

  const _setTableOption = useCallback(() => {
    setTableOption((prevTableOption) =>
      prevTableOption === 'States' ? 'Districts' : 'States'
    );
  }, []);

  useEffect(() => {
    const workerInstance = worker();
    workerInstance.getDistricts(states);
    workerInstance.addEventListener('message', (message) => {
      if (message.data.type !== 'RPC') {
        setDistricts(message.data);
        workerInstance.terminate();
      }
    });
  }, [tableOption, states]);

  const transition = useTransition(isInfoVisible, null, {
    from: TABLE_FADE_OUT,
    enter: TABLE_FADE_IN,
    leave: TABLE_FADE_OUT,
  });*/}

  const tableStatistics = expandTable
    ? TIMESERIES_STATISTICS
    : TIMESERIES_STATISTICS;

  return (
    <React.Fragment>

      <div className="table-container">
        <div
          className="table fadeInUp"
          style={{
            gridTemplateColumns: `repeat(${tableStatistics.length + 1}, auto)`,
          }}
        >
          <div className="row heading">
            <div
              className="cell heading"
            >
              <div>{t('Year')}</div>
              {sortData.sortColumn === 'regionName' && (
                <div
                  className={classnames('sort-icon', {
                    invert: sortData.isAscending,
                  })}
                >
                  <FilterIcon size={10} />
                </div> 
              )}
            </div>

            {tableStatistics.map((statistic) => (
              <HeaderCell
                key={statistic}
                {...{statistic, sortData, setSortData}} 
                handleSort={handleSortClick.bind(this, statistic)}            
              />
            ))}
          </div>

          {Object.keys(timeseries || {})
              .filter(
                (stateCode) =>
                  stateCode !== 'TT' &&
                  !(stateCode === UNASSIGNED_STATE_CODE && isPerMillion)
              )
              .map((stateCode) => {
                return (
                  <Row
                    key={stateCode}
                    data={timeseries[stateCode]}
                    {...{
                      stateCode,
                      isPerMillion,
                      regionHighlighted,
                      setRegionHighlighted,
                      expandTable,
                    }}
                  />
                );
              })}

        </div>
      </div>
    </React.Fragment>
  );
}

const isEqual = (prevProps, currProps) => {
  if (
    !equal(
      prevProps.regionHighlighted?.districtName,
      currProps.regionHighlighted?.districtName
    )
  ) {
    return false;
  } else if (
    !equal(
      prevProps.regionHighlighted?.stateCode,
      currProps.regionHighlighted?.stateCode
    )
  ) {
    return false;
  } else if (
    !equal(
      prevProps.data['TT'].total.confirmed,
      currProps.data['TT'].total.confirmed
    )
  ) {
    return false;
  } else if (!equal(prevProps.expandTable, currProps.expandTable)) {
    return false;
  } else return true;
};

export default React.memo(TrendTable, isEqual);
