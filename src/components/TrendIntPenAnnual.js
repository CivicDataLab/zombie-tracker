import {
  D3_TRANSITION_DURATION,
  STATISTIC_CONFIGS,
  TIMESERIES_STATISTICS,
  INTPEN_STATISTICS,
} from '../constants';
import {useResizeObserver} from '../hooks/useResizeObserver';
import {
  capitalize,
  formatNumber,
  formatDate,
  getStatistic,
  parseIndiaDate,
} from '../utils/commonFunctions';

import classnames from 'classnames';
import {min, max, bisector} from 'd3-array';
import {axisBottom, axisRight, axisLeft} from 'd3-axis';
import {interpolatePath} from 'd3-interpolate-path';
import {scaleTime, scaleLinear} from 'd3-scale';
import {select, mouse} from 'd3-selection';
import {line, curveMonotoneX} from 'd3-shape';
// eslint-disable-next-line
import {transition} from 'd3-transition';
import {formatISO, subDays} from 'date-fns';
import equal from 'fast-deep-equal';
import React, {useCallback, useEffect, useRef, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';

// Chart margins
const margin = {top: 15, right: 50, bottom: 60, left: 50};

function TrendIntPenAnnual({timeseries, intpen_years, chartType}) {
  const {t} = useTranslation();
  const refs = useRef([]);

  const dates = intpen_years;

  // alert(JSON.stringify(timeseries))

  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  const [highlightedDate, setHighlightedDate] = useState();

  useEffect(() => {
    setHighlightedDate(dates[dates.length - 1]);
  }, [dates]);

  const getBarWidth = useCallback(() => {
    const T = dates.length;
    // Dimensions
    const {width} = dimensions || wrapperRef.current.getBoundingClientRect();
    // Chart extremes
    const chartRight = width - margin.right;
    const chartLeft  = margin.left;
    // Bar widths
    const axisWidth = chartRight - margin.left;
    return Math.min(4, axisWidth / (1.25 * T));
  }, [dates.length, dimensions]);

  useEffect(() => {
    const T = dates.length;
    // Dimensions
    const {width, height} =
      dimensions || wrapperRef.current.getBoundingClientRect();
    // Chart extremes
    const chartRight = width - margin.right;
    const chartLeft  = margin.left;
    const chartBottom = height - margin.bottom;
    const barWidth = getBarWidth();

    // Buffer space along y-axis
    const yBufferTop = 1.2;
    const yBufferBottom = 1.1;

    const xScale = scaleTime()
      .clamp(true)
      .domain(T ? [parseIndiaDate(dates[0]), parseIndiaDate(dates[T - 1])] : [])
      .range([margin.left, chartRight]);

    // Number of x-axis ticks
    const numTicksX = width < 480 ? 3 : 3;

    const xAxis = (g) =>
      g.attr('class', 'x-axis').call(
        axisBottom(xScale)
          .ticks(numTicksX)
          .tickFormat((date) => formatDate(date, 'yyyy'))
      );

    const xAxis2 = (g, yScale) => {
      g.attr('class', 'x-axis2')
        .call(axisBottom(xScale).tickValues([]).tickSize(0))
        .select('.domain')
        .style('transform', `translateY(${yScale(0)}px)`);

      if (yScale(0) !== chartBottom) g.select('.domain').attr('opacity', 0.4);
      else g.select('.domain').attr('opacity', 0);
    };
  
    const yAxis = (g, yScale) =>
      g
        .attr('class', 'y-axis')
        .call(axisRight(yScale).ticks(4, '0~s').tickPadding(4));

    const yAxis2 = (g, yScale2) =>
      g
        .attr('class', 'y-axis2')
        .call(axisLeft(yScale2).ticks(4, '0~s').tickPadding(4));

    function mousemove() {
      const xm = mouse(this)[0];
      const date = xScale.invert(xm);
      if (!isNaN(date)) {
        const bisectDate = bisector((date) => parseIndiaDate(date)).left;
        const index = bisectDate(dates, date, 1);
        const dateLeft = dates[index - 1];
        const dateRight = dates[index];
        setHighlightedDate(
          date - parseIndiaDate(dateLeft) < parseIndiaDate(dateRight) - date
            ? dateLeft
            : dateRight
        );
      }
    }

    function mouseout() {
      setHighlightedDate(dates[T - 1]);
    }

    /* Begin drawing charts */
    refs.current.forEach((ref, i) => {
      const svg = select(ref);
      const t = svg.transition().duration(D3_TRANSITION_DURATION);

      const statistic = INTPEN_STATISTICS[i];
      const yScale = scaleLinear()
        .clamp(true)
        .domain([
          yBufferBottom *
            Math.min(
              0,
              min(dates, (date) =>
                timeseries[date]['intpen'] //getStatistic(timeseries[date], chartType, statistic)
              )
            ),
          Math.max(
            1,
            yBufferTop *
              max(dates, (date) =>
                timeseries[date]['intpen'] //getStatistic(timeseries[date], chartType, statistic)
              )
          ),
        ])
        .nice(4)
        .range([chartBottom, margin.top]);

      const yScale2 = scaleLinear()
        .clamp(true)
        .domain([
          yBufferBottom *
            Math.min(
              0,
              min(dates, (date) =>
                timeseries[date]['cases_reg'] //getStatistic(timeseries[date], chartType, statistic)
              )
            ),
          Math.max(
            1,
            yBufferTop *
              max(dates, (date) =>
                timeseries[date]['cases_reg'] //getStatistic(timeseries[date], chartType, statistic)
              )
          ),
        ])
        .nice(4)
        .range([chartBottom, margin.top]);

      const color = STATISTIC_CONFIGS[statistic].color;

      /* X axis */
      svg
        .select('.x-axis')
        .style('transform', `translateY(${chartBottom}px)`)
        .transition(t)
        .call(xAxis);

      svg.select('.x-axis2').transition(t).call(xAxis2, yScale);

      /* Y axis */
      svg
        .select('.y-axis')
        .style('transform', `translateX(${chartRight}px)`)
        .transition(t)
        .call(yAxis, yScale);

      /* Y axis 2 */
      svg
        .select('.y-axis2')
        .style('transform', `translateX(${chartLeft}px)`)
        .transition(t)
        .call(yAxis2, yScale2);

      /* Path dots */
      svg
        .selectAll('circle')
        .data(dates, (date) => date)
        .join((enter) =>
          enter
            .append('circle')
            .attr('fill', color)
            .attr('stroke', color)
            .attr('cy', chartBottom)
            .attr('cx', (date) => xScale(parseIndiaDate(date)))
        )
        .transition(t)
        .attr('r', barWidth / 2)
        .attr('cx', (date) => xScale(parseIndiaDate(date)))
        .attr('cy', (date) =>
          yScale(timeseries[date]['intpen']) //getStatistic(timeseries[date], chartType, statistic))
        );

      svg
        .selectAll('circle1')
        .data(dates, (date) => date)
        .join((enter) =>
          enter
            .append('circle')
            .attr('fill', '#0d182a')
            .attr('stroke', '#0d182a')
            .attr('cy', chartBottom)
            .attr('cx', (date) => xScale(parseIndiaDate(date)))
        )
        .transition(t)
        .attr('r', barWidth / 2)
        .attr('cx', (date) => xScale(parseIndiaDate(date)))
        .attr('cy', (date) =>
          yScale2(timeseries[date]['cases_reg']) //getStatistic(timeseries[date], chartType, statistic))
        );

      /* Path bars */
      {/*svg
        .selectAll('rect')
        .data(dates, (date) => date)
        .join((enter) =>
          enter
            .append('rect')
            .attr('fill', color)
            .attr('stroke', color)
            .attr('y', (date) => yScale(getStatistic(timeseries[date], chartType, statistic)) )
            .attr('x', (date) => xScale(parseIndiaDate(date)))
            .attr("width", 5)
            .attr("height", 0)
        )
        .transition(t)
        .attr('height', (date) => chartBottom - yScale(getStatistic(timeseries[date], chartType, statistic)) 
        );  */}     


      /* divide 
      svg.selectAll('line').remove();
      svg.selectAll('divide')
        .data(["2015"])
	.join((enter) =>
	  enter
	  .append('line')
	  .attr('fill', color)
	  .attr('stroke', color)
          .style("stroke-dasharray", "1,1")
	  .attr("y1", 0)
	  .attr("y2", 0)
	  .attr("x1", (date) => xScale(parseIndiaDate(date)))
	  .attr("x2", (date) => xScale(parseIndiaDate(date)))
        )
        .transition(t)
	  .attr("y1", 0)
	  .attr("y2", chartBottom)
	  .attr("x1", (date) => xScale(parseIndiaDate(date)))
	  .attr("x2", (date) => xScale(parseIndiaDate(date)))
        ; */

      svg.append("text")
	    .attr("class", "y label")
	    .attr("text-anchor", "end")
	    .attr("y", 10)
	    .attr("dy", ".75em")
            .attr("x", (-35))
	    .attr("transform", "rotate(-90)")
            .attr("letter-spacing","2")
	    .text("Total cases registered");


      svg.append("text")
	    .attr("class", "y label")
	    .attr("text-anchor", "end")
	    .attr("y", chartRight + 30)
	    .attr("dy", ".75em")
            .attr("x", (-30))
	    .attr("transform", "rotate(-90)")
            .attr("letter-spacing","2")
	    .text("Internet users(in million)");


      if (chartType === 'total') {
        svg
          .selectAll('.stem')
          .transition(t)
          .attr('y1', yScale(0))
          .attr('y2', yScale(0))
          .remove();

        const linePath = line()
          .curve(curveMonotoneX)
          .x((date) => xScale(parseIndiaDate(date)))
          .y((date) =>
            yScale(timeseries[date]['intpen']) //getStatistic(timeseries[date], chartType, statistic))
          );

        let pathLength;

        const linePath2 = line()
          .curve(curveMonotoneX)
          .x((date) => xScale(parseIndiaDate(date)))
          .y((date) =>
            yScale2(timeseries[date]['cases_reg']) //getStatistic(timeseries[date], chartType, statistic))
          );

        let pathLength2;

        svg
          .selectAll('.trend')
          .data(T ? [dates] : [])
          .join(
            (enter) =>
              enter
                .append('path')
                .attr('class', 'trend')
                .attr('fill', 'none')
                .attr('stroke', color + '50')
                .attr('stroke-width', 4)
                .attr('d', linePath)
                .attr('stroke-dasharray', function () {
                  return (pathLength = this.getTotalLength());
                })
                .call((enter) =>
                  enter
                    .attr('stroke-dashoffset', pathLength)
                    .transition(t)
                    .attr('stroke-dashoffset', 0)
                ),
            (update) =>
              update
                .attr('stroke-dasharray', null)
                .transition(t)
                .attrTween('d', function (date) {
                  const previous = select(this).attr('d');
                  const current = linePath(date);
                  return interpolatePath(previous, current);
                })
          );

        svg
          .selectAll('.trend1')
          .data(T ? [dates] : [])
          .join(
            (enter) =>
              enter
                .append('path')
                .attr('class', 'trend')
                .attr('fill', 'none')
                .attr('stroke', '#808080' )
                .attr('stroke-width', 4)
                .attr('d', linePath2)
                .attr('stroke-dasharray', function () {
                  return (pathLength2 = this.getTotalLength());
                })
                .call((enter) =>
                  enter
                    .attr('stroke-dashoffset', pathLength2)
                    .transition(t)
                    .attr('stroke-dashoffset', 0)
                ),
            (update) =>
              update
                .attr('stroke-dasharray', null)
                .transition(t)
                .attrTween('d', function (date) {
                  const previous = select(this).attr('d');
                  const current = linePath2(date);
                  return interpolatePath(previous, current);
                })
          );
      } else {
        /* DAILY TRENDS */
        svg.selectAll('.trend').remove();

        svg
          .selectAll('.stem')
          .data(dates, (date) => date)
          .join((enter) =>
            enter
              .append('line')
              .attr('class', 'stem')
              .attr('stroke-width', barWidth)
              .attr('x1', (date) => xScale(parseIndiaDate(date)))
              .attr('y1', chartBottom)
              .attr('x2', (date) => xScale(parseIndiaDate(date)))
              .attr('y2', chartBottom)
          )
          .transition(t)
          .attr('stroke-width', barWidth)
          .attr('x1', (date) => xScale(parseIndiaDate(date)))
          .attr('y1', yScale(0))
          .attr('x2', (date) => xScale(parseIndiaDate(date)))
          .attr('y2', (date) =>
            yScale(timeseries[date]['intpen']) //getStatistic(timeseries[date], chartType, statistic))
          );
      }

      svg.selectAll('*').attr('pointer-events', 'none');
      svg
        .on('mousemove', mousemove)
        .on('touchmove', mousemove)
        .on('mouseout', mouseout)
        .on('touchend', mouseout);
    });
  }, [chartType, dimensions, getBarWidth, timeseries, dates]);

  useEffect(() => {
    const barWidth = getBarWidth();
    refs.current.forEach((ref) => {
      const svg = select(ref);
      svg
        .selectAll('circle')
        .attr('r', (date) =>
          date === highlightedDate ? barWidth : barWidth / 2
        );
    });
  }, [highlightedDate, getBarWidth]);

  const getStatisticDelta = useCallback(
    (statistic) => {
      if (!highlightedDate) return;
      const deltaToday = getStatistic(
        timeseries?.[highlightedDate],
        'delta',
        statistic
      );
      if (chartType === 'total') return deltaToday;

      const yesterday = formatISO(subDays(parseIndiaDate(highlightedDate), 1), {
        representation: 'date',
      });
      const deltaYesterday = getStatistic(
        timeseries?.[yesterday],
        'delta',
        statistic
      );
      return deltaToday - deltaYesterday;
    },
    [timeseries, highlightedDate, chartType]
  );

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

  return (
    <React.Fragment>
        {INTPEN_STATISTICS.map((statistic, index) => {
          const delta = getStatisticDelta(statistic, index);
          const statisticConfig = STATISTIC_CONFIGS[statistic];
          return (
            <div
              key={statistic}
              className={classnames('svg-parent fadeInUp wide_timeseries', `is-${statistic}`)}
              ref={wrapperRef}
              style={trail[index], {marginRight:'2%', height:'17rem',  marginBottom: '5rem'}}
            >
              {highlightedDate && (
                <div className={classnames('stats', `is-${statistic}`)} style={{paddingLeft:'3rem'}}>
                  <h5 className="title">
                    {t(capitalize(statisticConfig.ts_displayName))}
                  </h5>
                  <h5 className="title">
                    {formatDate(highlightedDate, 'yyyy')}
                  </h5>
                  <div className="stats-bottom">
                    <h2 style={{'color':'#646f6f50'}}>
                      {formatNumber(
                          timeseries[highlightedDate]['intpen'], 
                        'float',
                        statistic
                      )} million users, 
                    </h2>
                    <h2 style={{'color':'#808080'}}>
                      {formatNumber(
                          timeseries[highlightedDate]['cases_reg'], 
                        'int',
                        statistic
                      )} cases
                    </h2>
                    {/*<h6>{`${delta > 0 ? '+' : ''}${formatNumber(
                      delta,
                      statisticConfig.format !== 'short'
                        ? statisticConfig.format
                        : 'int',
                      statistic
                    )}`}</h6> */}
                  </div>
                </div>
              )}
              <svg
                ref={(element) => {
                  refs.current[index] = element;
                }}
                preserveAspectRatio="xMidYMid meet"
		style={{marginTop:'2em'}}
              >
                <g className="x-axis" />
                <g className="x-axis2" />
                <g className="y-axis" />
                <g className="y-axis2" />
              </svg>
            </div>
          );
        })}
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

export default React.memo(TrendIntPenAnnual, isEqual);
