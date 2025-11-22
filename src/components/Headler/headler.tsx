"use client"

import React from "react";
import { useRouter } from "next/navigation";

interface HeadlerProps {
}

const Headler: React.FC<HeadlerProps> = () => {

    const router = useRouter();

    const handleNewNote = () => {
         router.push("/notePage");
    }

    return (
        <div className="text-white h-10 flex items-center border-b border-gray-700 p-6">
            {/* naviation buttons left side */}
            <div className="flex items-center space-x-4">
                <div>
                    <button>
                        sidebar
                    </button>
                </div>

                <div>
                    <p>
                        koda
                    </p>
                </div>
            </div>

                {/* naviation buttons right side */}
            <div className="ml-auto flex items-center space-x-4">

                <div>
                    <button className="hover:cursor-pointer hover:border-b hover:border-gray-700"
                    onClick={handleNewNote}
                    >
                        New Note
                    </button>
                </div>

                <div>
                    <button className="hover:cursor-pointer hover:border-b hover:border-gray-700">
                        Not
                    </button>
                </div>

                <div className="">
                    <button className="hover:cursor-pointer rounded-full border border-gray-700 px-3 py-1">
                        User
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Headler;