import {useContext} from "react";
import TableContext from "@/shared/table/tableContext";

const TableHeader = () => {
    const {columns} = useContext(TableContext)

    return (
        <thead>
        <tr>
            {columns.map(({header}, index) => (
                <th className="p-4 first:rounded-tl-lg last:rounded-tr-lg bg-slate-800 font-bold table__header" key={index}>{header}</th>
            ))}
        </tr>
        </thead>
    )
}

export default TableHeader;
