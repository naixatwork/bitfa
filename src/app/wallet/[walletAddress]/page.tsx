import {DetailWallet, Wallet} from "@/app/wallet/wallet.types";
import {axiosInstance} from "@/api";
import {Card} from "primereact/card";
import {Chart} from "primereact/chart";
import _ from "lodash";

const WalletDetailPage = async ({params}: { params: { walletAddress: string } }) => {
    const wallet: DetailWallet = await axiosInstance.get(`walletsummary/${params.walletAddress}`, {
        params: {
            network: 'eth'
        }
    }).then((res) => res.data);

    console.log({wallet})
    console.log({rec: wallet?.totalBuyAmounts?.month})

    const barChartData = {
        labels: _.keys(wallet?.totalBuyAmounts?.month),
        datasets: [
            {
                type: 'bar',
                label: 'Buy amount',
                tension: 0.4,
                borderWidth: 2,
                borderColor: 'green',
                fill: true,
                data: _.map(wallet?.totalBuyAmounts?.month, (value) => value),
            },
            {
                type: 'bar',
                label: 'Sell amount',
                tension: 0.4,
                borderWidth: 2,
                borderColor: 'red',
                fill: true,
                data: _.map(wallet?.totalBuyAmounts?.month, (value) => value),
            },
        ]
    }

    const lineChartData = {
        labels: _.keys(wallet?.totalBuyAmounts?.month),
        datasets: [
            {
                type: 'line',
                label: 'Buy amount',
                tension: 0.4,
                borderWidth: 2,
                borderColor: 'green',
                fill: false,
                data: _.map(wallet?.totalBuyAmounts?.month, (value) => value),
            },
            {
                type: 'line',
                label: 'Sell amount',
                tension: 0.4,
                borderWidth: 2,
                borderColor: 'red',
                fill: false,
                data: _.map(wallet?.totalSellAmounts?.month, (value) => value),
            }
        ],
    }

    console.log(lineChartData.datasets)

    return (
        <div className="grid grid-cols-1 grid-rows-7 md:grid-cols-6 gap-5 container mx-auto pt-5 h-full">
            <Card className="row-span-4 col-span-3 flex justify-center items-center">
                <Chart
                    className="w-full h-full"
                    type="line"
                    data={lineChartData}
                    options={{
                        legend: {
                            display: true,
                        },
                        maintainAspectRatio: false,
                        aspectRatio: 0.6,
                        scales: {
                            x: {
                                beginAtZero: true
                            },

                        }
                    }}/>
            </Card>
            <Card className="row-span-4 col-span-3 flex justify-center items-center">
                <Chart type="bar" data={barChartData} options={{
                    legend: {
                        display: true,
                    },
                    maintainAspectRatio: false,
                    aspectRatio: 0.6,
                    scales: {
                        x: {
                            stacked: true,
                            beginAtZero: true
                        },
                        y: {
                            stacked: true
                        }
                    }
                }}/>
            </Card>
        </div>
    )
}

export default WalletDetailPage
