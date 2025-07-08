import Navbar from "./components/Navbar.tsx";
import {useParams} from "react-router-dom";

export default function Event () {
    const { id } = useParams();
    return (
        <>
            <Navbar/>
            <div className="m-5 md:m-10">
                Plus de détail sur mon événement : { id }.
            </div>
        </>
    )
}