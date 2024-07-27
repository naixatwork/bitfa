'use client'

import {useContext} from "react";
import TableContext from "@/shared/table/tableContext";
import {Columns} from "@/shared/table/table.types";
import cx from "clsx";

const TableRow = <T extends { id: string }, >({row, index}: { row: T, index: number }) => {
    const {columns} = useContext(TableContext);

    const renderCell = (column: Columns<T>) => {
        if (typeof column.body === "function") {
            return column.body(row);
        }

        return column.body
    }

    return (
        <tr className={cx(index % 2 === 0 || 'bg-zinc-900')}>
            {columns.map((col, index) => <td
                className={cx("px-4")}
                key={index}
            >{renderCell(col)}</td>)}
        </tr>
    )
}

export default TableRow;
