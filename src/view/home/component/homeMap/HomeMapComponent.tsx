"use client";

import {useCallback, useEffect, useMemo} from "react";
import {
  setDestinationHomeLocation,
  setOriginHomeLocation,
  useHomeLocation,
  useHomeLocationAction,
} from "@fash-q/view/home/context/HomeLocationProvider";
import Map, {IMapPoint} from "@fash-q/components/map/Map";
import {latLng, latLngBounds, LeafletMouseEvent} from "leaflet";
import {useMap} from "react-leaflet";

function HomeMapComponent() {
  const {origin, destination, originConfirm, destinationConfirm} =
    useHomeLocation();
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
      if (!originConfirm) {
        dispatch(setOriginHomeLocation(event.latlng));
      } else if (!destinationConfirm) {
        dispatch(setDestinationHomeLocation(event.latlng));
      }
    },
    [destinationConfirm, dispatch, originConfirm]
  );

  return (
    <>
      <Map
        onClick={onClick}
        className="relative w-full h-full"
        points={[points]}
        zoomControl={false}
      >
        <MapZoom points={points} activeZoom={destinationConfirm} />
        <CurrentLocation />
      </Map>
    </>
  );
}

export default HomeMapComponent;

interface IMapZoom {
  points: IMapPoint[];
  activeZoom: boolean;
}

function MapZoom({points, activeZoom}: IMapZoom) {
  const map = useMap();

  useEffect(() => {
    if (activeZoom) {
      const latlng = points.map((item) => {
        return latLng(item.lat, item.lng);
      });
      const bounds = latLngBounds(latlng);
      map.fitBounds(bounds, {padding: [20, 20]});
    }
  }, [activeZoom, map, points]);

  return null;
}

function CurrentLocation() {
  const {current} = useHomeLocation();
  const map = useMap();

  useEffect(() => {
    if (current?.lat && current.lng) {
      map.flyTo({lat: current.lat, lng: current.lng}, map.getZoom());
    }
  }, [map, current]);

  return null;
}
