import React from "react";
import Plot from "react-plotly.js";
import data from "./bardata.json";

// class BarChart extends Component {
const BarChart = () => {
  // render() {

  const output = data.map((Data) => Data.CALCULATED_AT);
  const rate = data.map((rate) => rate.RATE_0);

  return (
    <div>
      <Plot
        data={[
          {
            x: output,
            y: rate,
            type: "scatter",
            mode: "lines"
          },
          { type: "scatter", x: output, y: rate }
        ]}
        layout={{ width: 500, height: 500, title: "Time series data" }}
      />
    </div>
  );
};
// }

export default BarChart;
