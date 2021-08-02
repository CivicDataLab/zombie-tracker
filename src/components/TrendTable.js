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
  TIMESERIES_TABLE_STATISTICS,
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

const Row      = lazy(() => import('./Row'));
const Trendrow = lazy(() => import('./Trendrow'));

function TrendTable({timeseries, regionHighlighted, dates, chartType}) {
  const {t} = useTranslation();


  const refs = useRef([]);

  const wrapperRef = useRef();

  const [highlightedDate, setHighlightedDate] = useState();

  useEffect(() => {
    setHighlightedDate(dates[dates.length - 1]);
  }, [dates]);

 



  const trail = useMemo(() => {
    const styles = [];

    [0, 0, 0, 0, 0].map((element, index) => {
      styles.push({
        animationDelay: `${index * 250}ms`,
      });
      return null;
    });
    return styles;
  }, []);








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


  const tableStatistics = TIMESERIES_TABLE_STATISTICS; //TIMESERIES_STATISTICS;

  return (
    <React.Fragment>

      <div className="table-container" style={{maxHeight:'none'}}>
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
              .map((stateCode) => {  //statecode is the year here (as key is year)
                return (
                  <Trendrow
                    key={stateCode}
                    data={timeseries[stateCode]}
                    {...{
                      stateCode,
                      isPerMillion,
                      regionHighlighted,
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
  if (!equal(currProps.chartType, prevProps.chartType)) {
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
  } else if (!equal(currProps.dates, prevProps.dates)) {
    return false;
  }
  return true;
};

export default React.memo(TrendTable, isEqual);

