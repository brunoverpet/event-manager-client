import {CalendarDays, MapPin, Users} from "lucide-react";
import {Button} from "./components/ui/button.tsx";

export default function EventCard  () {
   return (
       <>
           <div className="inline-grid py-6 px-6 gap-4 rounded-md text-sm font-medium transition-all border bg-background shadow-xs">
               <div className="flex items-center space-x-4">
                   <CalendarDays color="orange" size={45} />
                   <span className="text-lg font-semibold max-w-fit line-clamp-1">Nom de l'événement très très long qui doit être limité</span>
               </div>
               <div className="flex items-center space-x-4">
                   <MapPin color="purple" size={45} />
                   <span className="text-lg font-semibold  max-w-fit line-clamp-2">Emplacement très long aussi qui doit revenir à la ligne</span>
               </div>
               <div className="flex items-center space-x-4">
                   <Users color="green" size={45} />
                   <span className="text-lg font-semibold max-w-fit break-words">Nombre de personnes maximums</span>
               </div>
               <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold max-w-fit line-clamp-4">
                    Description : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
               </div>
               <Button className="mt-5" size="lg">Voir l'événement</Button>
           </div>

       </>
   )
}