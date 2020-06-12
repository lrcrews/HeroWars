import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';
import * as _ from 'lodash';

import { TimeSeriesEntry } from './TimeSeriesEntry';

import './TimeSeries.scss';

export interface TimeSeriesProps {
  orderedEntries: Array<TimeSeriesEntry>;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

// WIP

const TimeSeries: React.FC<TimeSeriesProps> = (props) => {
  const { orderedEntries = [], xAxisLabel = '', yAxisLabel = '' } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);

  const timeFormatDay = d3.timeFormat('%a %d');
  const timeFormatWeek = d3.timeFormat('%b %d');
  const timeFormatMonth = d3.timeFormat('%b');
  const timeFormatYear = d3.timeFormat('%Y');

  const margin = { top: 8, right: 0, bottom: 24, left: 50 };
  const tickPadding = 16;

  let height: number;
  let heightWithMargins: number;

  let width: number;
  let widthWithMargins: number;

  let svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  let chart: d3.Selection<SVGGElement, unknown, null, undefined>;

  let line: d3.Selection<SVGPathElement, TimeSeriesEntry[], null, undefined>;
  let lineGenerator: d3.Line<TimeSeriesEntry>;

  let xAxis: d3.Axis<number | Date | { valueOf(): number }>;
  let xScale: d3.ScaleTime<number, number>;

  let yAxis: d3.Axis<number | { valueOf(): number }>;
  let yScale: d3.ScaleLinear<number, number>;

  useEffect(() => {
    if (!_.isEmpty(orderedEntries)) {
      // Remove existing chart if data changed (future case)
      d3.select(chartContainerRef.current).selectAll('*').remove();
      buildChart();
    }
  }, [orderedEntries]);

  const buildChart = (): void => {
    initScales();
    initAxes();
    initLineGenerator();
    initSvg();
    renderChart();
  };

  const initScales = (): void => {
    xScale = d3.scaleTime().domain([orderedEntries[0].date, new Date()]).nice();
    const max = d3.max(orderedEntries, (entry) => entry.value) || 500000;
    let min = d3.min(orderedEntries, (entry) => entry.value) || 0;
    min = min - min * 0.1;
    yScale = d3.scaleLinear().domain([min, max]).nice();
  };

  const initAxes = (): void => {
    xAxis = d3
      .axisBottom(xScale)
      .tickSizeInner(0)
      .tickSizeOuter(0)
      .tickPadding(tickPadding)
      .tickFormat((domainValue: number | Date | { valueOf(): number }, index: number) => {
        const value = domainValue as Date;
        return (d3.timeMonth(value) < value
          ? d3.timeWeek(value) < value
            ? timeFormatDay
            : timeFormatWeek
          : d3.timeYear(value) < value
          ? timeFormatMonth
          : timeFormatYear)(value);
      });
    yAxis = d3.axisLeft(yScale).tickSizeInner(0).tickSizeOuter(0).tickPadding(tickPadding);
  };

  const initLineGenerator = (): void => {
    lineGenerator = d3
      .line<TimeSeriesEntry>()
      .x((entry) => xScale(entry.date))
      .y((entry) => yScale(entry.value));
  };

  const initSvg = (): void => {
    const element = chartContainerRef.current;
    if (element) {
      svg = d3.select(element).append('svg').attr('width', element.offsetWidth).attr('height', element.offsetHeight);
      chart = svg.append('g');
      chart.append('g').attr('class', 'grid');
      line = chart.append('path').datum(orderedEntries).attr('class', 'time-series-line');
      chart.append('g').attr('class', 'xAxis time-series-axis');
      chart.append('g').attr('class', 'yAxis time-series-axis');
    } else {
      console.log('container ref not available to init svg.');
    }
  };

  const renderChart = (): void => {
    updateDimensions();
    if (width > 0 && height > 0) {
      console.log(`time series chart width: ${width}, height: ${height}`);
      updateAxes();
      updateSvg();
      updateLine();
    }
  };

  const updateDimensions = (): void => {
    const element = chartContainerRef.current;
    if (element) {
      widthWithMargins = element.offsetWidth;
      width = element.offsetWidth - margin.left - margin.right - tickPadding;
      heightWithMargins = element.offsetHeight;
      height = element.offsetHeight - margin.top - margin.bottom - tickPadding;
    } else {
      console.log('container ref not available to update dimensions.');
    }
  };

  const updateAxes = (): void => {
    xScale.range([0, width]);
    yScale.range([height, 0]);
    xAxis.scale(xScale);
    yAxis.scale(yScale);
    // @ts-ignore
    svg.select('.xAxis.time-series-axis').attr('transform', `translate(0, ${height})`).call(xAxis);
    // @ts-ignore
    svg.select('.yAxis.time-series-axis').call(yAxis);
    // @ts-ignore
    svg.select('.grid').call(yAxis.tickSize(-width));
  };

  const updateSvg = (): void => {
    svg.attr('width', widthWithMargins).attr('height', heightWithMargins);
    chart.attr('transform', `translate(${margin.left}, ${margin.top})`);
  };

  const updateLine = (): void => {
    line.attr('d', lineGenerator);
  };

  return (
    <div ref={chartContainerRef} className="time-series">
      {/* The d3 svg appends in this div */}
    </div>
  );
};
export default TimeSeries;
