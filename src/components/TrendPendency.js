import {
  D3_TRANSITION_DURATION,
  STATISTIC_CONFIGS,
  TIMESERIES_STATISTICS,
  PENDENCY_STATISTICS,
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
import {scaleBand, scaleTime, scaleLinear, scaleQuantize} from 'd3-scale';
import {select, mouse, event} from 'd3-selection';
import {line, curveMonotoneX} from 'd3-shape';
// eslint-disable-next-line
import {transition} from 'd3-transition';
import {formatISO, subDays} from 'date-fns';
import equal from 'fast-deep-equal';
import React, {useCallback, useEffect, useRef, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';

// Chart margins
const margin = {top: 15, right: 50, bottom: 45, left: 25};

function Trendbar({timeseries, pendency_years, chartType}) {
  const {t} = useTranslation();
  const refs = useRef([]);

  const dates = pendency_years;

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

    // Number of x-axis ticks
    const numTicksX = width < 480 ? 5 : 5;

    const xAxis = (g) =>
      g.attr('class', 'x-axis').call(
        axisBottom(xScale)
          .ticks(numTicksX)
          .tickFormat((date) => date)
      );

    // alert (JSON.stringify(timeseries));

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

    /* Begin drawing charts */
    refs.current.forEach((ref, i) => {
      const svg = select(ref);
      const t = svg.transition().duration(D3_TRANSITION_DURATION);

      const statistic = PENDENCY_STATISTICS[i];
      const yScale = scaleLinear()
        .clamp(true)
        .domain([
          yBufferBottom *
            Math.min(
              0,
              min(dates, (date) =>
                timeseries[date] //getStatistic(timeseries[date], chartType, statistic)
              )
            ),
          Math.max(
            1,
            yBufferTop *
              max(dates, (date) =>
                timeseries[date] //getStatistic(timeseries[date], chartType, statistic)
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
            .attr('y', (date) => yScale(timeseries[date]) )
            .attr('x', (date) => xScale(date))
            .attr("width", barWidth / 2)
            .attr("height", 0)
        )
        .transition(t)
        .attr('height', (date) => chartBottom - yScale(timeseries[date]) 
        );       

      /* label text */
      svg.append("text")
	    .attr("class", "y label")
	    .attr("text-anchor", "end")
	    .attr("y", chartRight + 35)
	    .attr("dy", ".75em")
            .attr("x", (-10))
	    .attr("transform", "rotate(-90)")
            .attr("letter-spacing","2")
	    .text("Percentage of cases disposed");

      svg.append("text")             
	.attr("transform",
	    "translate(" + (width/2) + " ," + 
		           (height + margin.top - margin.bottom + 20) + ")")
	.style("text-anchor", "middle")
        .attr("letter-spacing","2")
	.text('Time interval (Years)');
   


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
        {PENDENCY_STATISTICS.map((statistic, index) => {
          const delta = getStatisticDelta(statistic, index);
          const statisticConfig = STATISTIC_CONFIGS[statistic];
          return (
            <div
              key={statistic}
              className={classnames('svg-parent fadeInUp', `is-${statistic}`)}
              ref={wrapperRef}
              style={trail[index], {marginRight:'2%', height:'15rem'}}
            >
              {highlightedDate && (
                <div className={classnames('stats', `is-${statistic}`)}>
                  <h5 className="title">
                    {t(capitalize(statisticConfig.ts_displayName))}
                  </h5>
                  <h5 className="title">
                    {highlightedDate}
                  </h5>
                  <div className="stats-bottom">
                    <h2>
                      {formatNumber(
                          timeseries[highlightedDate],
                        
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
                // <g className="x-axis2" />
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
