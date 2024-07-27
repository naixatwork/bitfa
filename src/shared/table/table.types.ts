import {ReactNode} from "react";

export type Columns<T> = {
    header: ReactNode;
    body: ((row: T) => ReactNode) | ReactNode;
}

export type TableProps<T> = {
    data: T[];
    columns: Columns<T>[];
    cardTemplate: (row: T) => ReactNode;
}
