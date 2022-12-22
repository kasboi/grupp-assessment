import React from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export function Search({}) {
    return (
        <div className="relative my-2 max-w-sm mx-auto">
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="border border-slate-300 outline-blue-500 w-full rounded-lg pl-10 pr-2 py-2"
            />
            <MagnifyingGlassIcon className="w-5 absolute top-2.5 left-2 text-gray-400" />
        </div>
    )
}
