import Navbar from "./Navbar.tsx";
import {Button} from "./components/ui/button.tsx";
import EventCard from "./EventCard.tsx";

export default function App()  {

  return (
      <>
            <Navbar/>
          <div className="m-4 md:m-10">
              <div className="mt-16">
                <h1 className="text-5xl font-semibold mb-4">Dashboard</h1>
                <div className="md:flex justify-center space-x-8 space-y-4">
                  <Button variant="outline" className="md:px-10 py-8 text-3xl">Mes événements créés</Button>
                  <Button variant="outline" className="md:px-10 py-8 text-3xl">Événements enregistrés</Button>
                </div>
              </div>

              <div className="mt-20">
                  <div className="flex justify-between space-x-8">
                    <h2 className="text-xl md:text-5xl font-semibold">Événements en cours</h2>
                    <Button size="lg">Créer un événement</Button>
                  </div>

                  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
