"use client";

import {useCallback} from "react";
import {
  setDestinationHomeLocation,
  setOriginHomeLocation,
  useHomeLocation,
  useHomeLocationAction,
} from "@fash-q/view/home/context/HomeLocationProvider";
import AppHeaderBack from "@fash-q/components/appHeader/AppHeaderBack";

function HomeHeaderBack() {
  const {destinationConfirm, originConfirm} = useHomeLocation();
  const dispatch = useHomeLocationAction();

  const onClick = useCallback(() => {
    if (destinationConfirm) {
      dispatch(setDestinationHomeLocation(null));
    } else if (originConfirm) {
      dispatch(setOriginHomeLocation(null));
    }
  }, [destinationConfirm, dispatch, originConfirm]);

  return (
    <AppHeaderBack
      onClick={onClick}
      className="flex items-center justify-center bg-white p-2 rounded-full shadow-xl pointer-events-auto"
    />
  );
}

export default HomeHeaderBack;
