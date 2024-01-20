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
  const {origin, originConfirm, destination, destinationConfirm, isLoading} =
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

  const disabled = useMemo(() => {
    if (origin && !originConfirm) {
      return false;
    } else if (destination && !destinationConfirm) {
      return false;
    } else if (originConfirm && destinationConfirm) {
      return false;
    }
    return true;
  }, [destination, destinationConfirm, origin, originConfirm]);

  return (
    <>
      <Button
        disabled={disabled}
        loading={isLoading}
        onClick={onClick}
        type="primary"
        className="btn_submit btn_submit_primary pointer-events-auto disabled:bg-gray-300 disabled:text-white"
      >
        {title}
      </Button>
    </>
  );
}

export default HomeMapSubmit;
