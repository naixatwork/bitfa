'use server'

import {axiosInstance} from "@/api";
import WalletList from "@/app/wallet/wallet-list";
import {Wallet} from "@/app/wallet/wallet.types";

export type WalletPageProps = {
    searchParams: {
        limit: string;
        page: string;
    }
}

const WalletPage = async ({searchParams}: WalletPageProps) => {
    const wallets: Wallet[] = await axiosInstance.get('valuable_wallets', {
        params: {
            limit: searchParams.limit || 7,
            page: searchParams.page || 1,
        }
    }).then((res) => {
        res.data.sort((a: any, b: any) => b.netProfit - a.netProfit)
        return res.data;
    });

    return (
        <div className="container mx-auto pt-5">
            <h1 className="m-0 mb-5 text-4xl text-center md:text-right">Valuable Wallets</h1>
            <WalletList searchParams={searchParams} wallets={wallets}/>
        </div>
    )
}

export default WalletPage;
