"use client";

import HomeMapSubmit from "@fash-q/view/home/component/homeMap/HomeMapSubmit";
import HomeMapCurrentLocation from "@fash-q/view/home/component/homeMap/HomeMapCurrentLocation";
import {useHomeLocation} from "@fash-q/view/home/context/HomeLocationProvider";

function HomeMapButtons() {
  const {destinationConfirm} = useHomeLocation();
  return (
    <div className="absolute z-[1000] bottom-5 left-0 right-0 pointer-events-none px-screenSpace">
      {!destinationConfirm ? <HomeMapCurrentLocation /> : null}
      <HomeMapSubmit />
    </div>
  );
}

export default HomeMapButtons;
