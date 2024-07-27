import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Wallet',
};

const WalletLayout = ({children}: { children: ReactNode }) => {
    return children
}

export default WalletLayout
