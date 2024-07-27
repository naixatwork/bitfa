import {TableProps} from "@/shared/table/table.types";
import {createContext} from "react";

const TableContext = createContext<Pick<TableProps<any>, 'data' | 'columns'>>({
    columns: [],
    data: []
})

export default TableContext
