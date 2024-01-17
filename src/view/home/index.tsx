import {ContentWrapper} from "@fash-q/utils/const";
import dynamic from "next/dynamic";
import MapLoading from "@fash-q/view/home/component/MapLoading";

const HomeMap = dynamic(() => import("@fash-q/view/home/component/HomeMap"), {
  ssr: false,
  loading: MapLoading,
});

function Home() {
  return (
    <div id={ContentWrapper}>
      <HomeMap />
    </div>
  );
}

export default Home;
