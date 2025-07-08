import Navbar from "./components/Navbar.tsx";
import {Button} from "./components/ui/button.tsx";
import EventCard from "./components/EventCard.tsx";

export default function Home () {
    return (
        <>
            <Navbar/>
            <div className="m-5 md:m-10">
                <div className="mt-17">
                    <h1 className="text-5xl font-semibold mb-4">Dashboard</h1>
                    <div className="md:flex justify-center space-x-9 space-y-4">
                        <Button variant="outline" className="md:px-11 py-8 text-3xl">Mes événements créés</Button>
                        <Button variant="outline" className="md:px-11 py-8 text-3xl">Événements enregistrés</Button>
                    </div>
                </div>

                <div className="mt-21">
                    <div className="flex justify-between space-x-9">
                        <h2 className="text-xl md:text-5xl font-semibold">Événements en cours</h2>
                        <Button size="lg">Créer un événement</Button>
                    </div>

                    <div className="mt-17 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </div>
        </>
    )
}