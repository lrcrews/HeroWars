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

  let svg;
  let chart;

  let line;
  let lineGenerator;

  let xAxis;
  let xScale: d3.ScaleTime<number, number>;

  let yAxis;
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
    // initLineGenerator();
    // initSvg();
    // renderChart();
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
  };

  return (
    <div ref={chartContainerRef} className="time-series">
      {/* The d3 svg appends in this div */}
    </div>
  );
};
export default TimeSeries;
