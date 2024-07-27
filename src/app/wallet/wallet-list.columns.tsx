import {Columns} from "@/shared/table";
import {Wallet} from "@/app/wallet/wallet.types";
import {formatNumber} from "@/shared/standard-number";
import TruncatedAddress from "@/shared/standard-address/truncatedAddress/truncatedAddress";
import Link from "next/link";
import {Button} from "primereact/button";

export const Network = ({networkId}: Wallet) => <p>{networkId}</p>

const walletListColumns: Columns<Wallet>[] = [
    {
        header: <p className="text-left m-0">Network</p>,
        body: (row) => <Network {...row} />,
    },
    {
        header: <p className="text-left m-0">Age</p>,
        body: ({age}) => <p className="m-0">{age}</p>
    },
    {
        header: <p className="text-left m-0">Profit</p>,
        body: ({netProfit}) => <p className="m-0">{formatNumber(netProfit, 4)}</p>
    },
    {
        header: <p className="text-left m-0 table__header--big">Address</p>,
        body: ({walletAddress}) => <div>
            <TruncatedAddress address={walletAddress} containerClassName="w-full"/>
        </div>
    },
    {
        header: <></>,
        body: (({walletAddress}) => <div className="flex gap-2 items-center justify-end">
            <Link href={`/wallet/${walletAddress}`} >
                <Button label="Details" icon="pi pi-info-circle" severity="secondary" outlined />
            </Link>
        </div>)
    }
]

export default walletListColumns
