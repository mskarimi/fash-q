"use client";

import HomeSelectTarget from "@fash-q/view/home/component/homeHeader/HomeSelectTarget";
import HomeHeaderPrice from "@fash-q/view/home/component/homeHeader/HomeHeaderPrice";
import {useHomeLocation} from "@fash-q/view/home/context/HomeLocationProvider";

function HomeHeaderBody() {
  const {originConfirm, destinationConfirm} = useHomeLocation();

  if (originConfirm && destinationConfirm) {
    return (
      <>
        <HomeHeaderPrice />
      </>
    );
  }

  return (
    <>
      <HomeSelectTarget />
    </>
  );
}

export default HomeHeaderBody;
