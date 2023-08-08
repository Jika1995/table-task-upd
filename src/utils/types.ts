export type HeaderObj = {
    id: string;
    type: string;
    caption: string;
    align?: string
}

export type DataArray = [
    string,
    number,
    string,
    number,
    number | {
        d: number;
        color: string
    }
]

export type Report = {
    id: string;
    report_name: string;
    header: HeaderObj[],
    data: DataArray[]
}