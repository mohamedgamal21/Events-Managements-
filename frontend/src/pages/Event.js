import { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    )
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // throw new Response(JSON.stringify({message: "couldn't fetch events"}, {status: 500}));
        throw json({ messgae: "couldn't fetch events" }, { status: 500 })
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function Loader() {
    return defer({
        events: loadEvents(), 
    });
}