"use client";

import {
  MapContainer,
  MapContainerProps,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import {Icon, LatLngLiteral, LeafletMouseEvent, Point} from "leaflet";
import {useCallback, useEffect} from "react";
import pin from "./pin.svg";

export interface IMapPoint {
  lat: number;
  lng: number;
  title?: string | null;

  [x: string]: any;
}

export type TPoints = IMapPoint[][];

export interface IMap extends Omit<MapContainerProps, "center"> {
  centerLatitude?: number | null;
  centerLongitude?: number | null;
  points?: TPoints;
  pinIcons?: string[];
  onClick?: (event: LeafletMouseEvent) => void;
  enableMap?: boolean;
  onClickMarker?: (value: IMapPoint) => void;
}

const defaultLocation: LatLngLiteral = {
  lat: 35.778765,
  lng: 51.415004,
};

function Map(props: IMap) {
  const {
    centerLatitude,
    centerLongitude,
    points,
    onClick,
    enableMap,
    pinIcons,
    onClickMarker,
    children,
    zoom = 14,
    ...rest
  } = props;

  useEffect(() => {
    const copyRight = document.getElementsByClassName(
      "leaflet-control-attribution leaflet-control"
    );
    // createLog("copyRight", copyRight);
    if (copyRight.length) {
      copyRight[0].remove();
    }
  }, []);

  const pointsCenterLng = points?.length ? points[0][0]?.lng : null;
  const pointsCenterLat = points?.length ? points[0][0]?.lat : null;

  const center = {
    lng: centerLongitude || pointsCenterLng || defaultLocation.lng,
    lat: centerLatitude || pointsCenterLat || defaultLocation.lat,
  };

  const showMarkers = useCallback(() => {
    let markers: JSX.Element[] = [];
    if (points?.length) {
      points.map((point, index) => {
        const url = pinIcons?.length ? pinIcons[index] : pin.src;
        const icon = new Icon({
          iconUrl: url,
          iconRetinaUrl: url,
          iconSize: [35, 35],
          iconAnchor: [17, 35],
          popupAnchor: [0, -20],
        });
        const baseId = Math.round(Math.random() * new Date().getTime());
        const tmp = point.map((item, idx) => {
          const position: LatLngLiteral = {
            lat: item.lat,
            lng: item.lng,
          };
          return (
            <Marker
              key={baseId + idx}
              position={position}
              icon={icon}
              eventHandlers={{
                click: () => {
                  onClickMarker?.(item);
                },
              }}
            >
              {item?.title ? (
                <Popup>
                  <p className="font-shabnam font-medium text-textColor text-center">
                    {item.title}
                  </p>
                </Popup>
              ) : null}
            </Marker>
          );
        });
        markers.push(...tmp);
      });
    }
    return markers;
  }, [onClickMarker, pinIcons, points]);

  return (
    <>
      <MapContainer center={center} zoom={zoom} {...rest}>
        {onClick ? <MapEvent onClick={onClick} /> : null}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showMarkers()}
        {children}
      </MapContainer>
    </>
  );
}

function MapEvent({onClick}: {onClick: (event: LeafletMouseEvent) => void}) {
  useMapEvent("click", onClick);

  return null;
}

export default Map;
