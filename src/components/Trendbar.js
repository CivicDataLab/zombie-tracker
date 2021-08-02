import {
  D3_TRANSITION_DURATION,
  STATISTIC_CONFIGS,
  TIMESERIES_STATISTICS,
  TRENDBAR_STATISTICS,
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
import {axisBottom, axisRight} from 'd3-axis';
import {interpolatePath} from 'd3-interpolate-path';
import {scaleTime, scaleLinear, scaleBand, scaleQuantize} from 'd3-scale';
import {select, mouse} from 'd3-selection';
import {line, curveMonotoneX} from 'd3-shape';
// eslint-disable-next-line
import {transition} from 'd3-transition';
import {formatISO, subDays} from 'date-fns';
import equal from 'fast-deep-equal';
import React, {useCallback, useEffect, useRef, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';

// Chart margins
const margin = {top: 15, right: 50, bottom: 45, left: 25};

function Trendbar({timeseries, dates, chartType}) {
  const {t} = useTranslation();
  const refs = useRef([]);

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
    const chartBottom = height - margin.bottom;
    const barWidth = getBarWidth();

    // Buffer space along y-axis
    const yBufferTop = 1.2;
    const yBufferBottom = 1.1;

    const xScale = scaleBand()
      .domain(dates)
      .range([margin.left, chartRight])
      .padding(1);
    /*scaleTime()
      .clamp(true)
      .domain(T ? [parseIndiaDate(dates[0]), parseIndiaDate(dates[T - 1])] : [])
      .range([margin.left, chartRight]);*/

    // Number of x-axis ticks
    const numTicksX = width < 480 ? 4 : 7;

    const xAxis = (g) =>
      g.attr('class', 'x-axis').call(
        axisBottom(xScale)
          .ticks(numTicksX)
          .tickFormat((date) => date)
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

    xScale.invert = function(x) {
	    var domain = this.domain();
	    var range = this.range()
	    var scale = scaleQuantize().domain(range).range(domain)
	    return scale(x)
	};

    function mousemove() {

      const xm = mouse(this)[0];
      const date = xScale.invert(xm);
      //alert(date)
      setHighlightedDate(date);
    }

    function mouseout() {
      setHighlightedDate(dates[T - 1]);
    }

    /*function mousemove() {
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
    }*/

    /* Begin drawing charts */
    refs.current.forEach((ref, i) => {
      const svg = select(ref);
      const t = svg.transition().duration(D3_TRANSITION_DURATION);

      const statistic = TRENDBAR_STATISTICS[i];
      const yScale = scaleLinear()
        .clamp(true)
        .domain([
          yBufferBottom *
            Math.min(
              0,
              min(dates, (date) =>
                getStatistic(timeseries[date], chartType, statistic)
              )
            ),
          Math.max(
            1,
            yBufferTop *
              max(dates, (date) =>
                getStatistic(timeseries[date], chartType, statistic)
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


      /* Path bars */
      svg.selectAll('rect').remove();
      svg
        .selectAll('rect')
        .data(dates, (date) => date)
        .join((enter) =>
          enter
            .append('rect')
            .attr('fill', color)
            .attr('stroke', color)
            .attr('y', (date) => yScale(getStatistic(timeseries[date], chartType, statistic)) )
            .attr('x', (date) => xScale(date))
            .attr("width", barWidth / 2)
            .attr("height", 0)
        )
        .transition(t)
        .attr('height', (date) => chartBottom - yScale(getStatistic(timeseries[date], chartType, statistic)) 
        );       


      /* divide */
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
	  .attr("x1", (date) => xScale(date))
	  .attr("x2", (date) => xScale(date))
        )
        .transition(t)
	  .attr("y1", 0)
	  .attr("y2", chartBottom)
	  .attr("x1", (date) => xScale(date))
	  .attr("x2", (date) => xScale(date))
        ;

      /* label text */
      svg.append("text")
	    .attr("class", "y label")
	    .attr("text-anchor", "end")
	    .attr("y", chartRight + 35)
	    .attr("dy", ".75em")
            .attr("x", (-30))
	    .attr("transform", "rotate(-90)")
            .attr("letter-spacing","2")
	    .text("Total Cases");

      svg.append("text")             
	.attr("transform",
	    "translate(" + (width/2) + " ," + 
		           (height + margin.top - margin.bottom + 20) + ")")
	.style("text-anchor", "middle")
        .attr("letter-spacing","2")
	.text('Case registration year');


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
        .selectAll('rect')
        .attr('width', (date) =>
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
        {TRENDBAR_STATISTICS.map((statistic, index) => {
          const delta = getStatisticDelta(statistic, index);
          const statisticConfig = STATISTIC_CONFIGS[statistic];
          return (
            <div
              key={statistic}
              className={classnames('svg-parent fadeInUp', `is-${statistic}`)}
              ref={wrapperRef}
              style={trail[index], {marginRight:'2%'}}
            >
              {highlightedDate && (
                <div className={classnames('stats', `is-${statistic}`)}>
                  <h5 className="title">
                    {t(capitalize(statisticConfig.ts_displayName))}
                  </h5>
                  <h5 className="title">
                    {formatDate(highlightedDate, 'yyyy')}
                  </h5>
                  <div className="stats-bottom">
                    <h2>
                      {formatNumber(
                        getStatistic(
                          timeseries?.[highlightedDate],
                          chartType,
                          statistic
                        ),
                        '%',
                        statistic
                      )}
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
              >
                <g className="x-axis" />
                <g className="x-axis2" />
                <g className="y-axis" />
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

export default React.memo(Trendbar, isEqual);
