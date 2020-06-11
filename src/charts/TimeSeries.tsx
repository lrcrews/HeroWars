import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';
import * as _ from 'lodash';

import { TimeSeriesEntry } from './TimeSeriesEntry';

import './TimeSeries.scss';

export interface TimeSeriesProps {
  orderedEntries: Array<TimeSeriesEntry>;
  xAxisLabel?: string;
  xAxisMaximumValue?: number;
  yAxisLabel?: string;
}

// WIP

const TimeSeries: React.FC<TimeSeriesProps> = (props) => {
  const { orderedEntries = [], xAxisLabel = '', xAxisMaximumValue, yAxisLabel = '' } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);

  const timeFormatDay = d3.timeFormat('%a %d');
  const timeFormatWeek = d3.timeFormat('%b %d');
  const timeFormatMonth = d3.timeFormat('%b');
  const timeFormatYear = d3.timeFormat('%Y');

  const margin = 8;
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
  }, [orderedEntries, xAxisMaximumValue]);

  const buildChart = (): void => {
    initScales();
    initAxes();
    initLineGenerator();
    initSvg();
    renderChart();
  };

  const initScales = (): void => {
    xScale = d3.scaleTime().domain([orderedEntries[0].date, new Date()]).nice();
    const max = xAxisMaximumValue ? xAxisMaximumValue : d3.max(orderedEntries, (entry) => entry.value);
    yScale = d3
      .scaleLinear()
      .domain([0, max || 500000]) // if max is not defined we'll use 500,000
      .nice();
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
      updateAxes();
      updateSvg();
      updateLine();
      updateDots();
    }
  };

  const updateDimensions = (): void => {
    const element = chartContainerRef.current;
    if (element) {
      const additionalSize = margin * 2 - tickPadding;
      widthWithMargins = element.offsetWidth;
      width = element.offsetWidth - additionalSize;
      heightWithMargins = element.offsetHeight;
      height = element.offsetHeight - additionalSize;
    } else {
      console.log('container ref not available to update dimensions.');
    }
  };

  const updateAxes = (): void => {
    xScale.range([0, width]);
    yScale.range([height, 0]);
    xAxis.scale(xScale);
    yAxis.scale(yScale);
    svg
      .select('.xAxis.time-series-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(() => xAxis);
    svg.select('.yAxis.time-series-axis').call(() => yAxis);
    svg.select('.grid').call(() => yAxis.tickSize(-width));
  };

  const updateSvg = (): void => {
    svg.attr('width', widthWithMargins).attr('height', heightWithMargins);
    chart.attr('transform', `translate(${margin}, ${margin})`);
  };

  const updateLine = (): void => {
    line.attr('d', lineGenerator);
  };

  const updateDots = (): void => {
    let dots: d3.Selection<Element, TimeSeriesEntry, any, any> = d3.selectAll('.time-series-dot');
    if (!dots.empty()) {
      dots.remove();
    }
    dots = createDots();
    dots
      .attr('cx', (entry: TimeSeriesEntry) => {
        return xScale(entry.date);
      })
      .attr('cy', (entry: TimeSeriesEntry) => {
        return yScale(entry.value);
      });
  };

  const createDots = (): d3.Selection<Element, TimeSeriesEntry, SVGGElement, unknown> => {
    return chart
      .selectAll('dot')
      .data(orderedEntries)
      .enter()
      .append((entry: TimeSeriesEntry) => {
        return document.createElementNS(d3.namespaces.svg, 'circle');
      })
      .attr('class', 'time-series-dot')
      .attr('r', 3)
      .attr('fill', '#ec0000')
      .attr('stroke', '#ec0000');
  };

  return (
    <div ref={chartContainerRef} className="time-series">
      {/* The d3 svg appends in this div */}
    </div>
  );
};
export default TimeSeries;
