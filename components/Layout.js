import Navbar from "./resume/Navbar";
import Sidebar from "./Sidebar";
import Head from "next/head"


export default function Layout({ children }) {
    return (
        <div className="md:flex justify-center space-x-2 w-4/5 m-auto">
            <Sidebar />
            <div className="my-5 shadow-xl w-full border-2 rounded-xl bg-gray-50">
                <Navbar />
                <div>{children}</div>
            </div>
        </div>
    )
}