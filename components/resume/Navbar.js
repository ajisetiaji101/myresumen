import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'


export default function Navbar(){

    const router = useRouter()

    function isActive (route) {
        if(route == router.pathname){
            return "active"
        }
        else ""
    }


    return (
        <nav className="flex justify justify-between px-5 py-2 text-xl uppercase font-fredoka">
            <Link href="/profile"><a className={isActive('/profile')}><h1 className="hover:text-green-400">Profile</h1></a></Link>
            <ul className="flex justify-end space-x-5">
                <li className={isActive('/cv')}><Link href="/cv"><a className="cursor-pointer hover:text-green-400">CV</a></Link></li>
                <li className={isActive('/project')}><Link href="/project"><a className="cursor-pointer hover:text-green-400">Project</a></Link></li>
            </ul>
        </nav>
    )
}