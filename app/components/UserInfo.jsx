"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const UserInfo = () => {
    const { data: session } = useSession();

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zinc300/10 flex flex-col gap-2 my-6">
                <div>
                    Name:{" "}
                    <span className="font-bold">{session?.user?.name}</span>
                </div>
                <div>
                    Email:{" "}
                    <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white font-bold px-6 py-2 my-6"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default UserInfo;
