'use client';

import {PrimeReactProvider} from "primereact/api";
import {ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const ClientProviders = ({children}: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                {children}
            </PrimeReactProvider>
        </QueryClientProvider>
    )
}

export default ClientProviders;
