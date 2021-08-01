import Image from 'next/image'
import perTamina from '../../public/pertamina.png'
import polTekbang from '../../public/poltekbang.png'
import lPjk from '../../public/lpjk.png'

export default function Excercise() {
    return (
        <div className="text-center bg-gray-200 px-5 pt-5 mt-2">
            <h1 className="w-max border-b-4 border-green-200 font-righteous uppercase">Excercise</h1>
            <div className="grid md:grid-cols-3 justify-items-center font-varela p-5">
                <div className="text-center">
                    <p>2019</p>
                    <div className="w-36 m-auto py-6 center">
                        <Image
                            src={polTekbang}
                        />
                    </div>
                    <p>Pelatihan Jaringan Tegangan Rendah Di Bandar Udara</p>
                </div>
                <div className="text-center">
                    <p>2019</p>
                    <div className="w-36 m-auto p-5">
                        <Image
                            src={perTamina}
                        />
                    </div>
                    <p>Magang tentang VOIP dan Server Jaringan Di Refinery Unit III Palembang</p>
                </div>
                <div className="text-center">
                    <p>2019</p>
                    <div className="w-36 m-auto p-5">
                        <Image
                            src={lPjk}
                        />
                    </div>
                    <p>Pelatihan Pengoperasian PLC</p>
                </div>
            </div>
        </div>
    )
}