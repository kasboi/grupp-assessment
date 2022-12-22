import { MagnifyingGlassIcon, ChartBarIcon } from "@heroicons/react/20/solid"
import {
    ChartIcon,
    FlagIcon,
    HomeIcon,
    LayerIcon,
    TaskIcon,
    UserIcon,
} from "./Icon"

const navList = [
    {
        name: "Home",
        icon: <HomeIcon />,
    },
    {
        name: "Dashboard",
        icon: <ChartIcon />,
    },
    {
        name: "Projects",
        icon: <LayerIcon />,
    },
    {
        name: "Tasks",
        icon: <TaskIcon />,
    },
    {
        name: "Reporting",
        icon: <FlagIcon />,
    },
    {
        name: "Users",
        icon: <UserIcon />,
    },
]

const Navbar = () => {
    return (
        <div className="mx-4">
            <p className="text-2xl">Untitled UI</p>
            <div className="relative max-w-sm mx-auto">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="border border-slate-300 outline-blue-500 w-full rounded-lg pl-10 pr-2 py-2"
                />
                <MagnifyingGlassIcon className="w-5 absolute top-2.5 left-2 text-gray-400" />
            </div>
            <div className="mt-8 text-gray-700">
                {navList.map((item) => (
                    <div className="flex items-center mb-2 p-0.5 hover:bg-slate-300">
                        <div className="mr-3">{item.icon}</div>
                        <span className="text-md">{item.name}</span>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Navbar
