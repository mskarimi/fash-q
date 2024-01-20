import {ContentWrapper} from "@fash-q/utils/const";
import dynamic from "next/dynamic";
import MapLoading from "@fash-q/view/home/component/homeMap/MapLoading";
import HomeHeader from "@fash-q/view/home/component/homeHeader";

const HomeMap = dynamic(() => import("@fash-q/view/home/component/homeMap"), {
  ssr: false,
  loading: MapLoading,
});

function Home() {
  return (
    <div id={ContentWrapper}>
      <HomeHeader />
      <HomeMap />
    </div>
  );
}

export default Home;
