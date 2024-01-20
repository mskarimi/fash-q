"use client";

import React, {useEffect, useRef} from "react";
import {Spin} from "antd";
import {wait} from "@fash-q/utils/utils";
import {
  setPriceHomeLocation,
  useHomeLocation,
  useHomeLocationAction,
} from "@fash-q/view/home/context/HomeLocationProvider";

function HomeHeaderPrice() {
  const {price, isLoading} = useHomeLocation();
  const dispatch = useHomeLocationAction();
  const isMounted = useRef(process.env.NODE_ENV === "production");

  useEffect(() => {
    if (isMounted.current) {
      const price = Math.round(Math.random() * 100000);
      wait(5000).then(() => dispatch(setPriceHomeLocation(price)));

      return () => {
        console.log("unMount");
        dispatch(setPriceHomeLocation(0));
      };
    }
    isMounted.current = true;
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center w-40 h-10 bg-white shadow-xl p-1 rounded-full text-sm pointer-events-auto">
      {isLoading ? (
        <Spin size="small" />
      ) : (
        <>
          <span className="font-light ml-1">تومان</span>
          <span className="font-medium">{price.toLocaleString("en-US")}</span>
        </>
      )}
    </div>
  );
}

export default HomeHeaderPrice;
