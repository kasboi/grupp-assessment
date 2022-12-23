import { PayMethodCard } from "./../components/PayMethodCard"
import { PayMethodMail } from "./../components/PayMethodMail"
import { Input } from "../components/Input"
import { Dropdown } from "./../components/Dropdown"
import { EnvelopeIcon } from "@heroicons/react/20/solid"
import "./Settings.css"

import mastercard from "../assets/mastercard.svg"
import visa from "../assets/visa.svg"
import radioBox from "../assets/radio-box.svg"
import radioUnchecked from "../assets/radio-unchecked.svg"

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
            <div className="mt-12">
                <h2 className="text-2xl mb-1">Settings</h2>
                <p className="text-lg text-gray-500 mb-4">
                    Manage your team and preferences here.
                </p>
            </div>
            <Dropdown details={details} />
            <div className="hidden sm:flex items-center overflow-auto btn-mode">
                {details.map((item) => (
                    <button
                        key={item.text}
                        type="button"
                        className="w-full px-4 py-1 text-base font-medium text-black bg-white border hover:bg-gray-100"
                    >
                        {item.text}
                    </button>
                ))}
            </div>
            <div className="mt-6">
                <h2 className="text-xl mb-1">Payment method</h2>
                <p className="text-md text-gray-500 mb-4">
                    Update your billing details and address.
                </p>
            </div>
            <PayMethodMail EnvelopeIcon={EnvelopeIcon} />
            <PayMethodCard
                visa={visa}
                radioBox={radioBox}
                mastercard={mastercard}
                radioUnchecked={radioUnchecked}
            />
        </div>
    )
}

export default Settings
