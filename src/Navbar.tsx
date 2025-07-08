import {Button} from "./components/ui/button.tsx";

export default function Navbar() {
    return (
        <>
            <div className="bg-slate-100 rounded-lg flex justify-between items-center p-3 m-4">
                <div className="text-5xl text-blue-500">Evently</div>
                <Button variant="destructive">Se déconnecter</Button>
            </div>
        </>
    )
}