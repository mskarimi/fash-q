"use client";

import React, {useCallback, useMemo} from "react";
import {Button} from "antd";
import {
  setDestinationConfirmHomeLocation,
  setOriginConfirmHomeLocation,
  useHomeLocation,
  useHomeLocationAction,
} from "@fash-q/view/home/context/HomeLocationProvider";

function HomeMapSubmit() {
  const {origin, originConfirm, destination, destinationConfirm} =
    useHomeLocation();
  const dispatch = useHomeLocationAction();

  const onClick = useCallback(() => {
    if (origin && !originConfirm) {
      dispatch(setOriginConfirmHomeLocation());
    } else if (destination && !destinationConfirm) {
      dispatch(setDestinationConfirmHomeLocation());
    }
  }, [destination, destinationConfirm, dispatch, origin, originConfirm]);

  const title = useMemo(() => {
    if (!originConfirm) {
      return "تایید مبدا";
    }
    if (!destinationConfirm) {
      return "تایید مقصد";
    }
    return "درخواست راننده";
  }, [destinationConfirm, originConfirm]);

  return (
    <>
      <Button
        onClick={onClick}
        type="primary"
        className="btn_submit btn_submit_primary pointer-events-auto"
      >
        {title}
      </Button>
    </>
  );
}

export default HomeMapSubmit;
