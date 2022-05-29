import React, { useEffect, useState } from "react";
import Skeletondevice from "../skeletons/skeletondevice";
import BarChart from "./BarChart";

const Devicelist = () => {
  const [devices, setdevices] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("http://localhost:3000/devices");
      const data = await res.json();
      setdevices(data);
    }, 2000);
  });
  return (
    <div data-testid="test-1" className="device-list table-responsive">
      <h2>Devices</h2>
      {!devices && [1, 2, 3, 4, 5].map((n) => <Skeletondevice key={n} />)}
      <BarChart />
      {/* <div class="table-responsive"> */}
      <table class="table  table-responsive table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">MODULEID</th>
            <th scope="col">SERVICE</th>
            <th scope="col">RESET_AT</th>
            <th scope="col">LATITUDE</th>
            <th scope="col">LONGITUDE</th>
          </tr>
        </thead>
        <tbody>
          {devices &&
            devices.map((device) => (
              <tr class="align-bottom">
                <td scope="row">{device.MODULEID}</td>
                <td>{device.SERVICE}</td>
                <td>{device.RESET_AT}</td>
                <td>{device.LATITUDE}</td>
                <td>{device.LONGITUDE}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    // </div>
  );
};
export default Devicelist;
