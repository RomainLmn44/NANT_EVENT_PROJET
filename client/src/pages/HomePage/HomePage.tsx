import { DataCarousel } from "../../Datas/DataCarousel";
import BodyHome from "../../components/BodyHome/BodyHome";
import Carousel from "../../components/Carousel/Carousel";

import ScrollToTopButton from "../../components/Scrolltotop/Scrolltotop";

function Home() {
  return (
    <>
      <div className="carousel-container">
        <Carousel imgSrc={DataCarousel} />
      </div>
      <BodyHome />
      <ScrollToTopButton />
    </>
  );
}

export default Home;
