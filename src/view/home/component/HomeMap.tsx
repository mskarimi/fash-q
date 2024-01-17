"use client";

import {useMemo} from "react";
import {useHomeLocation} from "@fash-q/view/home/context/HomeLocationProvider";
import Map, {IMapPoint} from "@fash-q/components/map/Map";

function HomeMap() {
  const {origin, destination} = useHomeLocation();

  const points = useMemo<IMapPoint[]>(() => {
    const tmp: IMapPoint[] = [];
    if (origin) {
      tmp.push(origin);
    }
    if (destination) {
      tmp.push(destination);
    }

    return tmp;
  }, [origin, destination]);

  return (
    <>
      <Map className="relative w-full h-full" points={[points]}></Map>
    </>
  );
}

export default HomeMap;
