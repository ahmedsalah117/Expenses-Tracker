import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  let maxAmount = 0;
  const arrayedValues = props.dataPoints.map((ele) => {
    maxAmount += ele.value;
  });
  // const maxValue = Math.max(...arrayedValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={maxAmount}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
