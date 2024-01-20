"use client";

import {Spin} from "antd";

function MapLoading() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <Spin />
    </div>
  );
}

export default MapLoading;
