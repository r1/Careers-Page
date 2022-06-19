import Nav from "./Nav";
import Landing from "./Landing";
import Brands from "./Brands";
import About from "./About";
import Team from "./Team";
import Perks from "./Perks";
import Openings from "./Openings";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <main className="h-full w-full overflow-auto px-5">
        <Landing />
        <Brands />
        <About />
        <Team />
        <Perks />
        <Openings />
      </main>
      <Footer />
    </>
  );
}
