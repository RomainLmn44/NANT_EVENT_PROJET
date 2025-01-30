import { Outlet } from "react-router-dom";
import BodyNight from "../../components/BodyNight/BodyNight";
import HeaderNight from "../../components/HeaderNight/HeaderNight";
import ScrollToTopButton from "../../components/Scrolltotop/Scrolltotop";

import "./NaoNight.css";
import Footer from "../../components/Footer/Footer";

function NaoNight() {
  return (
    <>
      <section className="body-naonight">
        <HeaderNight />
        <BodyNight />
        <Footer />
        <main>
          <Outlet />
        </main>
      </section>
      <ScrollToTopButton />
    </>
  );
}

export default NaoNight;
