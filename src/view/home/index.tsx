import {ContentWrapper} from "@fash-q/utils/const";
import dynamic from "next/dynamic";
import MapLoading from "@fash-q/view/home/component/MapLoading";
import HomeMapButtons from "@fash-q/view/home/component/HomeMapButtons";
import HomeHeader from "@fash-q/view/home/component/HomeHeader";

const HomeMap = dynamic(() => import("@fash-q/view/home/component/HomeMap"), {
  ssr: false,
  loading: MapLoading,
});

function Home() {
  return (
    <div id={ContentWrapper}>
      <HomeHeader />
      <HomeMap />
      <HomeMapButtons />
    </div>
  );
}

export default Home;
