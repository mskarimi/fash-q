import AppHeader from "@fash-q/components/appHeader";
import HomeHeaderBack from "@fash-q/view/home/component/homeHeader/HomeHeaderBack";
import HomeHeaderBody from "@fash-q/view/home/component/homeHeader/HomeHeaderBody";
import AppHeaderProfile from "@fash-q/components/appHeader/AppHeaderProfile";

function HomeHeader() {
  return (
    <div className="absolute z-[1000] top-0 left-0 right-0 pointer-events-none">
      <AppHeader
        right={<HomeHeaderBack />}
        body={<HomeHeaderBody />}
        left={
          <AppHeaderProfile className="flex items-center justify-center bg-white p-2 rounded-full shadow-xl pointer-events-auto" />
        }
      />
    </div>
  );
}

export default HomeHeader;
