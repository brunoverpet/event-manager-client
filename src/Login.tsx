import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Link} from "react-router-dom";

export default function Login () {
    return (
        <>
            <div className="bg-slate-100 rounded-lg flex justify-between items-center p-3 m-4">
                <span className="text-5xl text-blue-500">Evently</span>
            </div>
            <div className="flex items-center justify-center w-full mt-40">
                <div className="m-8 space-y-4 max-w-sm">
                    <h1 className="font-semibold text-2xl">Entrez vos identifiants de connexion.</h1>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Mot de passe" />

                    <div className="flex justify-between">
                        <Button variant="secondary" asChild>
                            <Link to="/register">S'inscrire</Link>
                        </Button>

                        <Button>Se connecter</Button>
                    </div>
                </div>
            </div>
        </>
    )
}