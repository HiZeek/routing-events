import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEvent = () => {
  const data = useLoaderData();
  const event = data.event;
  return <EventForm method="patch" event={event} />;
};

export default EditEvent;
