import React from "react"
import { Input } from "./Input"

export function PayMethodMail({ EnvelopeIcon }) {
    return (
        <div className="border-y-2 py-4 mb-12">
            <div className="mb-6">
                <h2 className="text-md">Contact email</h2>
                <p className="text-md text-gray-500 mb-4">
                    Where should invoices be sent?
                </p>
            </div>
            <label className="flex items-center mb-6 space-x-3">
                <input
                    type="radio"
                    name="checked-demo"
                    className="accent-purple-600"
                    id="color"
                />
                <div className="font-normal">
                    <h3 className="text-base">Send to my account email</h3>
                    <p className="text-gray-700 text-sm">
                        olivia@untitledui.com
                    </p>
                </div>
            </label>
            <label className="flex items-center space-x-3">
                <input
                    type="radio"
                    name="checked-demo"
                    className="accent-purple-600"
                    id="color"
                />
                <div className="font-normal">
                    <h3 className="text-base">Send to my account email</h3>
                    <Input
                        Icon={EnvelopeIcon}
                        type={"email"}
                        placeholder={"billing@untitledui.com"}
                    />
                </div>
            </label>
        </div>
    )
}
