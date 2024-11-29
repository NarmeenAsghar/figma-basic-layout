import React from "react";

export default function Header() {
    return (
        <div className="flex justify-between p-6 bg-blue-400 shadow-2xl">
            <div className="font-black text-3xl text-white">Welcome!</div>

            <div className="flex gap-6 items-center text-xl text-white">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Admissions</div>
                <div className="cursor-pointer">Results</div>
                <div className="cursor-pointer">Career</div>
                <div className="cursor-pointer">Contact</div>
            </div>
        </div>
    )
}