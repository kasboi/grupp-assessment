import { DropdownList } from "./../components/DropdownList";
import { ActiveRole } from "../components/ActiveRole";
import { ActiveMail } from "../components/ActiveMail";
import { Dropdown } from "./../components/Dropdown";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import "./Settings.css";

import mastercard from "../assets/mastercard.svg";
import visa from "../assets/visa.svg";
import avatar_icon from "../assets/avatar_icon.svg";
import radioBox from "../assets/radio-box.svg";
import radioUnchecked from "../assets/radio-unchecked.svg";
import Table from "../components/Table";

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
];

const Settings = ({ setVisible }) => {
  return (
    <div
      className="px-4 lg:px-12 lg:py-4 flex-1 overflow-hidden bg-neutral-100"
      onClick={() => setVisible(false)}
    >
      <div className="mt-6">
        <h2 className="text-2xl mb-1">Settings</h2>
        <p className="text-lg text-gray-500 mb-4">
          Manage your team and preferences here.
        </p>
      </div>
      <Dropdown details={details} />
      <DropdownList details={details} />
      <ActiveMail EnvelopeIcon={EnvelopeIcon} />
      <ActiveRole
        visa={visa}
        radioBox={radioBox}
        mastercard={mastercard}
        radioUnchecked={radioUnchecked}
        avatar_icon={avatar_icon}
      />
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Settings;
