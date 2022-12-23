import { Dropdown } from "./../components/Dropdown"
import "./Settings.css"

const details = [
    { text: "Details" },
    { text: "Profile" },
    { text: "Password" },
    { text: "Team" },
    { text: "Plan" },
    { text: "Billing" },
    { text: "Notifications" },
    { text: "Integrations" },
    { text: "API" },
]

const Settings = () => {
    return (
        <div className="px-4">
            <div>
                <h2 className="text-2xl">Settings</h2>
                <p className="text-lg text-gray-500">
                    Manage your team and preferences here.
                </p>
            </div>
            <Dropdown details={details} />
            <div className="hidden sm:flex items-center overflow-auto btn-mode">
                {details.map((item) => (
                    <button
                        type="button"
                        className="w-full px-4 py-1 text-base font-medium text-black bg-white border hover:bg-gray-100"
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Settings
