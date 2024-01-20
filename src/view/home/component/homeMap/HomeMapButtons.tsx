import HomeMapSubmit from "@fash-q/view/home/component/homeMap/HomeMapSubmit";
import HomeMapCurrentLocation from "@fash-q/view/home/component/homeMap/HomeMapCurrentLocation";

function HomeMapButtons() {
  return (
    <div className="absolute z-[1000] bottom-5 left-0 right-0 pointer-events-none px-screenSpace">
      <HomeMapCurrentLocation />
      <HomeMapSubmit />
    </div>
  );
}

export default HomeMapButtons;
