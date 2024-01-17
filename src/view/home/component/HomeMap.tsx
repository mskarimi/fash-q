"use client";

import {useCallback, useMemo} from "react";
import {
  setDestinationHomeLocation,
  setOriginHomeLocation,
  useHomeLocation,
  useHomeLocationAction,
} from "@fash-q/view/home/context/HomeLocationProvider";
import Map, {IMapPoint} from "@fash-q/components/map/Map";
import {LeafletMouseEvent} from "leaflet";

function HomeMap() {
  const {origin, destination} = useHomeLocation();
  const dispatch = useHomeLocationAction();

  const points = useMemo<IMapPoint[]>(() => {
    const tmp: IMapPoint[] = [];
    if (origin) {
      tmp.push({
        ...origin,
        title: "مبدا",
      });
    }
    if (destination) {
      tmp.push({
        ...destination,
        title: "مقصد",
      });
    }

    return tmp;
  }, [origin, destination]);

  const onClick = useCallback(
    (event: LeafletMouseEvent) => {
      if (!origin) {
        dispatch(setOriginHomeLocation(event.latlng));
      } else if (!destination) {
        dispatch(setDestinationHomeLocation(event.latlng));
      }
    },
    [destination, dispatch, origin]
  );

  return (
    <>
      <Map
        onClick={onClick}
        className="relative w-full h-full"
        points={[points]}
        zoomControl={false}
      ></Map>
    </>
  );
}

export default HomeMap;
