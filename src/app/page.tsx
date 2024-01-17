import Home from "@fash-q/view/home";
import HomeLocationProvider from "@fash-q/view/home/context/HomeLocationProvider";

export default function HomePage() {
  return (
    <HomeLocationProvider>
      <Home />
    </HomeLocationProvider>
  );
}
