import { useEffect, useState } from "react";
import type { EventApi, EventI } from "../../types/Events";
import CardMusic from "../CardMusic/CardMusic";
import GraphicSeperator from "../GraphicSeparator/GraphicSeparator";

function MusicPage() {
  const [event, setEvent] = useState<EventI[]>([]);
  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3A%22Concert%20-%20Musique%22",
    )
      .then((response) => response.json())
      .then((data: EventApi) => {
        setEvent(data.results);
      });
  }, []);

  return (
    <>
      <section className="theme-body">
        <h1 className="theme-title"> Evénement musicaux </h1>
        <GraphicSeperator />

        {event?.map((event) => {
          return (
            <CardMusic
              key={event.id_agenda_in}
              data={event}
              id={event.id_manif}
            />
          );
        })}
      </section>
    </>
  );
}
export default MusicPage;
