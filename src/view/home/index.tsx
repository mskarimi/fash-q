import {ContentWrapper} from "@fash-q/utils/const";
import dynamic from "next/dynamic";
import MapLoading from "@fash-q/view/home/component/MapLoading";
import HomeMapButtons from "@fash-q/view/home/component/HomeMapButtons";

const HomeMap = dynamic(() => import("@fash-q/view/home/component/HomeMap"), {
  ssr: false,
  loading: MapLoading,
});

function Home() {
  return (
    <div id={ContentWrapper}>
      <HomeMap />
      <HomeMapButtons />
    </div>
  );
}

export default Home;
