import Navbar from "./Navbar.tsx";
import {Button} from "./components/ui/button.tsx";
import EventCard from "./EventCard.tsx";

export default function App()  {

  return (
      <>
            <Navbar/>
          <div className="m-10">
              <div className="mt-16">
                <h1 className="text-5xl font-semibold">Dashboard</h1>
                <div className="flex justify-center space-x-8">
                  <Button variant="outline" className="px-10 py-8 text-3xl">Mes événements créés</Button>
                  <Button variant="outline" className="px-10 py-8 text-3xl">Événements enregistrés</Button>
                </div>
              </div>

              <div className="mt-20">
                  <div className="flex justify-between space-x-8">
                    <h2 className="text-5xl font-semibold">Événements en cours</h2>
                    <Button> Créer un événement</Button>
                  </div>

                  <div className="mt-16">
                      <EventCard />
                  </div>
              </div>
          </div>
      </>
  )
}
