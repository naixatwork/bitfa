'use client'

import {Wallet} from "@/app/wallet/wallet.types";
import Table from "@/shared/table";
import walletListColumns from "@/app/wallet/wallet-list.columns";
import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";
import {WalletPageProps} from "@/app/wallet/page";
import {useRouter} from "next/navigation";
import {Card} from "primereact/card";
import {Message} from "primereact/message";
import {formatNumber} from "@/shared/standard-number";
import TruncatedAddress from "@/shared/standard-address/truncatedAddress/truncatedAddress";
import Link from "next/link";
import {Button} from "primereact/button";

type WalletListProps = {
    wallets: Wallet[];
    searchParams: WalletPageProps['searchParams']
}

const WalletList = ({wallets, searchParams}: WalletListProps) => {
    const router = useRouter();

    const navigatePage = (event: PaginatorPageChangeEvent) => {
        const searchParams = new URLSearchParams();
        searchParams.append('limit', event.rows.toString());
        searchParams.append('page', (event.page + 1).toString());

        router.push(`/wallet?${searchParams.toString()}`)
    }

    return (
        <div className="flex flex-col gap-1">
            <Table
                cardTemplate={({age, netProfit, networkId, walletAddress}) => <div className="p-2">
                    <Card title={`Profit: ${formatNumber(netProfit, 4)}`}>
                        <div className="flex flex-col gap-3">
                            <Message className="flex w-full justify-start items-start" severity="info"
                                     text={`age: ${age}`}/>
                            <Message className="flex w-full justify-start items-start" severity="success"
                                     text={`network: ${networkId}`}/>
                            <TruncatedAddress address={walletAddress} containerClassName="w-full"/>
                            <div className="flex gap-2 items-center justify-end">
                                <Link href={`/wallet/${walletAddress}`}>
                                    <Button label="Details" icon="pi pi-info-circle" severity="secondary" outlined/>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>}
                data={wallets} columns={walletListColumns}/>
            <Paginator
                first={(parseInt(searchParams.page) - 1) * parseInt(searchParams.limit) || 1}
                rows={parseInt(searchParams.limit) || 7}
                totalRecords={1000}
                rowsPerPageOptions={[7, 20, 30]}
                onPageChange={navigatePage}
            />
        </div>
    )
}

export default WalletList
