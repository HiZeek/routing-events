import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import { action as manipulateEventAction } from "./components/EventForm";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import Error from "./pages/Error";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/events",
        element: <Events />,
        loader: eventsLoader,
      },
      {
        path: "/events/:eventId",
        element: <EventDetail />,
        loader: eventDetailLoader,
        action: deleteEventAction,
      },
      {
        path: "/events/:eventId/edit",
        element: <EditEvent />,
        loader: eventDetailLoader,
        action: manipulateEventAction,
      },
      {
        path: "/events/new",
        element: <NewEvent />,
        action: manipulateEventAction,
      },
      {
        path: "/newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
