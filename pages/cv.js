import Layout from "../components/Layout";
import Excercise from "../components/resume/Excercise";
import Navbar from "../components/resume/Navbar";
import Riwayat from "../components/resume/Riwayat";


export default function Cv(){
    return (
        <Layout>
            <Riwayat />
            <Excercise />
        </Layout>
    )
}