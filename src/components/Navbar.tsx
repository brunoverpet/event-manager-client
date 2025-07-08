import {Button} from "./ui/button.tsx";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="bg-slate-100 rounded-lg flex justify-between items-center p-3 m-4">
                <Button variant="ghost" asChild className="text-5xl text-blue-500">
                    <Link to="/">Evently</Link>
                </Button>
                <Button variant="destructive">Se déconnecter</Button>
            </div>
        </>
    )
}