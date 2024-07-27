export type Wallet = {
    walletAddress: string;
    networkId: 'eth';
    winRate: number;
    netProfit: number;
    avgHoldingTime: number;
    buyAmountLabel: string;
    totalScore: number;
    age: number;
    dayActive: 10;
    SwapTime: [];
    TotalFee: number;
    BotActivity: string;
    details: string;
    rank: number
}

export type DetailWallet = {
    receiveHistory: {
        amount: number,
        amount_usd: number,
        time: string,
        interval: string
    }[];
    totalBuyAmounts: {
        month: Record<string, number>
    }
    totalSellAmounts: {
        month: Record<string, number>
    }
}

// {
//     walletAddress: '0x796a2e783e40cf5c50cf7bdf4bce85b71e004fd2',
//         networkId: 'eth',
//     winRate: 61.111111111111114,
//     netProfit: 641.3039954902048,
//     avgHoldingTime: 0.09250000000000001,
//     buyAmountLabel: 'Small Size',
//     totalScore: 1200,
//     age: 108,
//     dayActive: 10,
//     SwapTime: [Array],
//     TotalFee: 3.41395508751849,
//     BotActivity: 'Not Bot activity',
//     details: 'Dex Trader',
//     totalnumPartiallyClosedData: 2,
//     totalNumofFullyOpenedData: 3,
//     totalTransactions: 75,
//     HotTokenHolders: [Array],
//     firstTopTokenHolder: [Object],
//     rank: 97
// },
