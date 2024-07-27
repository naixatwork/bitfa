'use client'

import {TableProps} from "@/shared/table/table.types";
import TableContext from "@/shared/table/tableContext";
import {useMemo} from "react";
import TableHeader from "@/shared/table/tableHeader";
import TableBody from "@/shared/table/tableBody";
import "./shame.css"
import {useRouter} from "next/navigation";

const Table = <T, >({data, columns, cardTemplate}: TableProps<T>) => {
    const tableContextValues = useMemo(() => {
        return {
            data,
            columns,
        }
    }, [data, columns]);

    return (
        <TableContext.Provider value={tableContextValues}>
            <table className="hidden md:table table-auto rounded-md w-full border-collapse">
                <TableHeader/>
                <TableBody/>
            </table>
            <div className="flex md:hidden flex-col gap-3">
                {data.map((row, index) => <div key={index} className="w-full">
                    {(cardTemplate(row))}
                </div>)}
            </div>
        </TableContext.Provider>
    )
}

export default Table
