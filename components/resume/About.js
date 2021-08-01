import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faBroadcastTower, faLaptop, faLaptopCode, faPalette, faPlug, faSatelliteDish, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <div>
            <div className="space-y-2 text-justify p-2">
                <p className="text-sm font-sans px-2 font-varela">I am a fresh graduate in Telecommunication Engginering From Politeknik Negeri Sriwijaya. I am Full Stack Developer too. My Language Programming focus in Javascript and I have 1 Years of Experience in Web Development. Beside that I can use Graphic Design App such as Adobe Photoshop, Ilustrator and Premiere. I hope my experience can use to My working office.</p>
            </div>
            <div className="bg-gray-100 p-5 space-y-2 rounded-b-xl">
                <div className=" text-xl border-b-4 border-green-300 w-max"> 
                    <h1 className="pt-5 hover:text-green-400 font-righteous uppercase">My Skills</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-5 py-10">
                    <div className="flex bg-gray-200  p-5 text-sm space-x-4 rounded-sm shadow-md hover:bg-yellow-200">
                        <FontAwesomeIcon icon={faSatelliteDish} className="text-6xl text-green-400"/>
                        <div>
                        <h1 className="font-righteous">Mikrotik</h1>
                        <p className="font-varela text-justify">I can manage and troubleshooting Telecommunication Network </p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200  p-5 text-sm space-x-4 rounded-sm shadow-md hover:bg-yellow-200">
                        <FontAwesomeIcon icon={faLaptopCode} className="text-6xl text-green-400"/>
                        <div>
                        <h1 className="font-righteous">Programming</h1>
                        <p className="font-varela text-justify">I can make a website and apps with Javascript Programming such as React JS and Node JS  </p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200  p-5 text-sm space-x-4 rounded-sm shadow-md hover:bg-yellow-200">
                        <FontAwesomeIcon icon={faPalette} className="text-6xl text-green-400"/>
                        <div>
                        <h1 className="font-righteous">Design Graphic</h1>
                        <p className="font-varela text-justify">I can use Adobe Apps for make a Vector and Editting Image to be more beautiful and Perfect</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200  p-5 text-sm space-x-4 rounded-sm shadow-md hover:bg-yellow-200">
                        <FontAwesomeIcon icon={faPlug} className="text-6xl text-green-400"/>
                        <div>
                        <h1 className="font-righteous">Electricity</h1>
                        <p className="font-varela text-justify">I can troubleshooting Electricity Tools and I can make a Engginering Tools such as Gas  Detector </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}