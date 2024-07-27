'use client'

import {Message} from "primereact/message";

const WalletError = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col gap-2">
            <Message severity="error" text="there was a problem with loading this page." />
            <p>please try again later.</p>
        </div>
    )
}

export default WalletError;
