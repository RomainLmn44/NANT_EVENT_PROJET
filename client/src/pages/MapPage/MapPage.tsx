import { useState } from "react";
import ContainerMapCard from "../../components/ContainerMapCard/ContainerMapCard";
import NantesEventsMap from "../../components/NantesEventsMap/NantesEventsMap";
import ScrollToTopButton from "../../components/Scrolltotop/Scrolltotop";
import type { EventI } from "../../types/Events";

function MapPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventI | null>(null);

  return (
    <>
      <NantesEventsMap selectedEvent={selectedEvent} />
      <ContainerMapCard onEventSelect={setSelectedEvent} />
      <ScrollToTopButton />
    </>
  );
}

export default MapPage;
