'use client'

import {useContext} from "react";
import TableContext from "@/shared/table/tableContext";
import TableRow from "@/shared/table/tableRow";

const TableBody = () => {
    const {data} = useContext(TableContext)

    return (
        <tbody>
        {data.map((row, index) => <TableRow index={index} key={index} row={row}/>)}
        </tbody>
    )
}

export default TableBody;
