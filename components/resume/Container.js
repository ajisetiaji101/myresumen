import About from "./About";
import Navbar from "./Navbar";

export default function Container(){
    return (
        <div className="my-5 shadow-xl w-full border-2 rounded-xl">
            <Navbar />
            <About />
        </div>
    )
}