import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faAddressCard, faAt, faDownload, faMap, faMapSigns, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import fotoProfil from '../public/aji1.png'
import { faDiscord, faFacebook, faInstagram, faLinkedin, faMeetup, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
    return (
        <div className="my-5 shadow-xl border-2 text-center rounded-xl md:w-2/5 bg-gray-50">
            <Image
                src={fotoProfil}
                alt="foto of author"
                className="rounded-full"
            />
            <h3 className="text-xl font-medium my-1 font-fredoka">
                <span className="text-green-400">Aji </span>
                Setiaji
            </h3>
            <p className="bg-gray-200 rounded-full p-1 mx-2 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white font-varela">Web Development</p>
            <p className="bg-gray-200 rounded-full p-2 my-2 mx-2 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white font-varela"><FontAwesomeIcon icon={faDownload} className="text-green-400 hover:text-green-800"/> Download My Resume</p>
            <div className="flex justify-evenly p-3">
                <span><a href="https://www.facebook.com/astevendgerardo" ><FontAwesomeIcon icon={faFacebook} className="text-blue-400 hover:text-blue-800"/></a></span>
                <span><a href="https://www.instagram.com/ajisetiaji1" ><FontAwesomeIcon icon={faInstagram} className="text-red-400 hover:text-red-800"/></a></span>
                <span><a href="https://www.linkedin.com/in/aji-setiaji-113885192" ><FontAwesomeIcon icon={faLinkedin} className="text-purple-400 hover:text-purple-800"/></a></span>
            </div>
            <div className="bg-gray-200 font-varela p-5 w-full">
                <p><a href="https://goo.gl/maps/sH66kt9eyLueVCsY7" ><FontAwesomeIcon icon={faMap} className="text-green-400 text-sm hover:text-green-800"/> Palembang, Indonesia</a></p>
                <p><a href="mailto:ajisetiaji101@gmail.com" ><FontAwesomeIcon icon={faAt} className="text-green-400 text-sm hover:text-green-800"/> ajisetiaji101@gmail.com</a></p>
                <p><a href="https://wa.me/+6289696485152?text=Hallo%2C%20Selamat%20Siang" ><FontAwesomeIcon icon={faWhatsapp} className="text-green-400 text-sm hover:text-green-800"/> +62 89696485152</a></p>
            </div>
            <button className="p-2 my-2 rounded-full font-varela text-sm text-white bg-gradient-to-r from-green-400 to-blue-500 opacity-50 hover:opacity-100">Message Me</button>
        </div>
    )
}