import Image from 'next/image'
import Bestah from '../../public/bestah.png'
import GasDetector from '../../public/GasDetector.jpg'

export default function Project() {
    return (
        <div className="p-5 grid md:grid-cols-3 gap-5 text-justify">
            <div className="shadow-md rounded-b-xl">
                <div className="p-2">
                    <div className="w-full">
                <Image
                    src={Bestah}
                />
                </div>
                <h1 className="text-center font-righteous">Bestah Coliving</h1>
                </div>
                <p className="bg-gray-200 p-2 rounded-b-xl font-varela">Bestah Coliving is a thirty room house built in the heart of Renon, Denpasar, Bali.</p>
            </div>
            <div className="shadow-md rounded-b-xl">
                <div className="p-2">
                    <div className="w-full">
                <Image
                    src={GasDetector}
                />
                </div>
                <h1 className="text-center font-righteous">Gas Detector</h1>
                </div>
                <p className="bg-gray-200 p-2 rounded-b-xl font-varela">I make a research tool that is Gas Detector. Gas detecter works to detect gas in home</p>
            </div>
        </div>
    )
}