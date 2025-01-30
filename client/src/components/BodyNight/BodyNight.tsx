import CardsEventNight from "../CardsEventNight/CardEventNight";
import "./BodyNight.css";
import { dataNaonight } from "../../Datas/DataNaoNight";

function BodyNight() {
  return (
    <>
      <section className="body-night">
        <h2 className="title-body-night">Les Events’ après minuit ! </h2>
        {dataNaonight.map((eventNight) => {
          return (
            <CardsEventNight key={eventNight.title} eventNight={eventNight} />
          );
        })}
      </section>
    </>
  );
}

export default BodyNight;
