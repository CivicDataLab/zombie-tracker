import {STATISTIC_CONFIGS, D3_TRANSITION_DURATION} from '../constants';
import {
  formatDate,
  formatNumber,
  getIndiaYesterdayISO,
  getStatistic,
} from '../utils/commonFunctions';

import {min, max} from 'd3-array';
import {axisBottom} from 'd3-axis';
import {scaleBand, scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
// eslint-disable-next-line
import {transition} from 'd3-transition';
import equal from 'fast-deep-equal';
import React, {useEffect, useRef} from 'react';
import {useMeasure} from 'react-use';

const getDeltaStatistic = (data, statistic) => {
  return getStatistic(data, 'delta', statistic);
};

const margin = {top: 50, right: 0, bottom: 50, left: 0};

function CaseBarGraph({timeseries, statistic, lookback}) {
  const svgRef = useRef();
  const [wrapperRef, {width, height}] = useMeasure();

  const pastDates = Object.keys(timeseries || {}).filter(
    (date) => date <= getIndiaYesterdayISO()
  );
  const dates = pastDates.slice(-lookback);

  useEffect(() => {
    if (!width) return;
    const svg = select(svgRef.current);

    const chartRight = width - margin.right;
    const chartBottom = height - margin.bottom;
    const r = 5;

    // const formatTime = timeFormat('%e %b');
    const xScale = scaleBand()
      .domain(timeseries.map(function (d) {return d.name;}))
      .range([margin.left, chartRight])
      .paddingInner(width / 1000);

    const yScale = scaleLinear()
      .domain([0, max(timeseries, function(d) {return d.value;})])
      .range([chartBottom, margin.top]);

    const xAxis = axisBottom(xScale)
      .tickSize(0);

    const t = svg.transition().duration(D3_TRANSITION_DURATION);

    svg
      .select('.x-axis')
      .transition(t)
      .style('transform', `translateY(${yScale(0)}px)`)
      .call(xAxis)
      .on('start', () => svg.select('.domain').remove())
      .selectAll('text')
      .attr('y', 0)
      .attr('dy', (d, i) =>
        d.value < 0 ? '-1em' : '1.5em'
      )
      .style('text-anchor', 'middle')
      .attr('fill', "#343a40");

    svg
      .selectAll('.bar')
      .data(timeseries)
      .join((enter) =>
        enter
          .append('path')
          .attr('class', 'bar')
          .attr('d', (d) =>
            roundedBar(xScale(d.name), yScale(0), xScale.bandwidth(), 0, r)
          )
      )
      .transition(t)
      .attr('d', (d) =>
        roundedBar(
          xScale(d.name),
          yScale(0),
          xScale.bandwidth(),
          yScale(0) - yScale(d.value),
          r
        )
      )
      .attr('fill', "#007bff"); 


    const textSelection = svg
      .selectAll('.label')
      .data(timeseries)
      .join('text')
      .attr('class', 'label')
      .attr('x', (d) => xScale(d.name) + xScale.bandwidth() / 2)
      .text((d) => d.value);

    textSelection
      .transition(t)
      .attr('fill', "#343a40")
      .attr('y', (d) => {
        const val = d.value;
        return yScale(val) + (val < 0 ? 15 : -6);
      });

  }, [dates, height, statistic, timeseries, width]);

  return (
    <div className="DeltaBarGraph" ref={wrapperRef}>
      <svg
        ref={svgRef}
        width={width}
        height={400}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
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
  } else if (!equal(prevProps.stateCode, currProps.stateCode)) {
    return false;
  } else if (!equal(prevProps.lookback, currProps.lookback)) {
    return false;
  } else if (!equal(prevProps.statistic, currProps.statistic)) {
    return false;
  }
  return true;
};

export default React.memo(CaseBarGraph, isEqual);

function roundedBar(x, y, w, h, r) {
  r = Math.sign(h) * Math.min(Math.abs(h), r);
  const paths = [
    `M ${x} ${y}`,
    `v ${-h + r}`,
    `q 0 ${-r} ${Math.abs(r)} ${-r}`,
    `h ${w - 2 * Math.abs(r)}`,
    `q ${Math.abs(r)} 0 ${Math.abs(r)} ${r}`,
    `v ${h - r}`,
    'Z',
  ];
  return paths.join(' ');
}
