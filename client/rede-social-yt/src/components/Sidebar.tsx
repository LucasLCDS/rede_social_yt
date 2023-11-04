import Link from "next/link";
import { useContext} from "react";
import { FaUserFriends, FaAlignLeft, FaPeopleArrows, FaStore, FaBookmark, FaFlag, FaCalendar } from "react-icons/fa";

import{
    TbDeviceImac,
    TbClockHour4
} from "react-icons/tb"
import { UserContext } from "@/context/UserContext";



function Sidebar() {
    const { user } = useContext(UserContext);

    return (
        <aside className="fixed w-1/6 pl-4">
            <nav className="flex flex-col gap-6 text-gray-600 font-semibold">
                <Link href={'/profile?id=' + user?.id} className="flex gap-2 pb-6 items-center">
                <img src={user?.userImg ? user.userImg: "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" className="w-8 h-8 rounded-full"/>
                <span>{user?.username}</span></Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaUserFriends className="w-8 h-6"/>
                     Amigos
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaAlignLeft className="w-8 h-6"/>
                      Feed
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaPeopleArrows className="w-8 h-6"/>
                     Grupos
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaStore className="w-8 h-6"/>
                     Loja
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <TbDeviceImac className="w-8 h-6"/>
                      Watch
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <TbClockHour4 className="w-8 h-6"/>
                      Lembranças
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaBookmark className="w-8 h-6"/>
                      Salvo
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaFlag className="w-8 h-6"/>
                     Página
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaCalendar className="w-8 h-6"/>
                     Eventos
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;