import { Logo } from "../components/Logo"
import { Input } from "../components/Input"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid"

import {
    ChartIcon,
    ExitIcon,
    FlagIcon,
    HomeIcon,
    LayerIcon,
    SettingsIcon,
    SupportIcon,
    TaskIcon,
    UserIcon,
} from "../components/Icon"

import logoImg from "../assets/Logomark.svg"
import imgWrap from "../assets/ImageWrap.svg"
import avatar from "../assets/Avatar.svg"
import NavBar from "../NavBar/NavBar"

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

const SideBar = ({ visible, setVisible }) => {
    return (
        <div
            className={`px-6 py-2 z-10 h-full bg-blue-200 ${
                visible ? "absolute" : "hidden"
            } top-0 left-0 lg:block lg:relative lg:basis-1/3`}
        >
            <div className="flex justify-between items-center">
                <Logo Logo={logoImg} />
                <XMarkIcon
                    className="text-slate-700 h-6 w-6 sm:hidden"
                    onClick={() => setVisible(!visible)}
                />
            </div>
            <Input
                Icon={MagnifyingGlassIcon}
                type="text"
                placeholder="Search"
            />
            <div className="mt-4 mb-7">
                {navList.map((item) => (
                    <button
                        key={item.name}
                        className="flex items-center mb-1.5 py-2 pl-0.5 w-full rounded-md hover:bg-slate-100"
                    >
                        <div className="mr-3 text-gray-900">{item.icon}</div>
                        <span className="text-md text-gray-700">
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>
            <div className="mb-12 text-gray-700">
                <div className="mb-4">
                    <button className="flex w-full items-center mb-2 py-2 pl-0.5 hover:bg-slate-100">
                        <div className="mr-3">
                            <SupportIcon />
                        </div>
                        <span className="text-md">Support</span>
                    </button>
                    <button className="flex w-full items-center mb-2 py-2 pl-0.5 hover:bg-slate-100">
                        <div className="mr-3">
                            <SettingsIcon />
                        </div>
                        <span className="text-md">Settings</span>
                    </button>
                </div>
                <div className="bg-slate-100 rounded-xl px-7 py-6 mb-10 max-w-sm">
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
            <div className="flex items-center justify-evenly py-4 border-t-2">
                <img src={avatar} alt="avatar" />
                <div>
                    <h3>Olivia Rhye</h3>
                    <p className="text-gray-600">olivia@untitledui.com</p>
                </div>
                <button>
                    <ExitIcon />
                </button>
            </div>
        </div>
    )
}

export default SideBar
