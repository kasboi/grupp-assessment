import { Logo } from "./../components/Logo"
import { Search } from "./../components/Search"

import {
    ChartIcon,
    FlagIcon,
    HomeIcon,
    LayerIcon,
    SettingsIcon,
    SupportIcon,
    TaskIcon,
    UserIcon,
} from "./Icon"

import logoImg from "../assets/Logomark.svg"
import imgWrap from "../assets/ImageWrap.svg"

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
        <div className="px-6">
            <Logo Logo={logoImg} />
            <Search />
            <div className="mt-4 mb-7">
                {navList.map((item) => (
                    <button className="flex items-center mb-1.5 py-1 pl-0.5 w-full rounded-md hover:bg-slate-100">
                        <div className="mr-3 text-gray-900">{item.icon}</div>
                        <span className="text-md text-gray-700">
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>
            <div className="mb-4 text-gray-700">
                <div className="mb-4">
                    <button className="flex w-full items-center mb-2 p-0.5 hover:bg-slate-100">
                        <div className="mr-3">
                            <SupportIcon />
                        </div>
                        <span className="text-md">Support</span>
                    </button>
                    <button className="flex w-full items-center mb-2 p-0.5 hover:bg-slate-100">
                        <div className="mr-3">
                            <SettingsIcon />
                        </div>
                        <span className="text-md">Settings</span>
                    </button>
                </div>
                <div className="bg-slate-100 rounded-xl px-7 py-6 max-w-sm">
                    <h3 className="font-semibold text-xl text-black mb-0.5">
                        New features available!
                    </h3>
                    <p className="text-lg py-1 mb-3">
                        Check out the new dashboard view. Pages now load faster.{" "}
                    </p>
                    <img
                        src={imgWrap}
                        alt="video_placeholder"
                        className="w-full mb-4"
                    />
                    <div>
                        <button className="mr-5">Dismiss</button>
                        <button className="text-violet-800">What's new?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
