import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventPage, {Loader as loaderEvent} from './pages/Event';
import EventRootlayout from './pages/EventRoot';
import EventsDetailsPage, {
  Loader as eventsDetailsLoader,
  actions as evetnDetailsAction
} from './pages/EventsDetails';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import NewsletterPage, {
  action as newsletterAction
} from './pages/Newsletter';
import {action as manupilatedEventAction} from './components/EventForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRootlayout />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: loaderEvent,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventsDetailsLoader,
            children: [
              { index: true, element: <EventsDetailsPage />, action: evetnDetailsAction},
              { path: 'edit', element: <EditEventPage />, action: manupilatedEventAction },
            ]
          },
          { path: 'new', element: <NewEventPage />, action: manupilatedEventAction },
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
