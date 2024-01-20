"use client";

import {useState} from "react";
import {Button} from "antd";
import {IconCurrentLocation} from "@fash-q/assets/icon";
import {
  setCurrentHomeLocation,
  useHomeLocationAction,
} from "@fash-q/view/home/context/HomeLocationProvider";

function HomeMapCurrentLocation() {
  const [loading, setLoading] = useState(false);
  const dispatch = useHomeLocationAction();

  function getLocationSuccess(position: GeolocationPosition) {
    console.log("position", position);
    setLoading(false);
    dispatch(
      setCurrentHomeLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  }

  function getLocationError(positionError: GeolocationPositionError) {
    setLoading(false);
    console.log("positionError", positionError);
  }

  return (
    <Button
      icon={<IconCurrentLocation className="w-5 h-5" />}
      loading={loading}
      className="pointer-events-auto w-[40px] h-[40px] flex items-center justify-center border-0 bg-white p-0 rounded-full mb-5 shadow-xl"
      onClick={() => {
        if ("geolocation" in navigator) {
          setLoading(true);
          const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 2000,
          };
          navigator.geolocation.getCurrentPosition(
            getLocationSuccess,
            getLocationError,
            options
          );
        } else {
          /* geolocation IS NOT available */
        }
      }}
    />
  );
}

export default HomeMapCurrentLocation;
