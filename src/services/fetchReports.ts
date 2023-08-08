import { baseAxios } from "@/utils/baseAxios";
import { Report } from "@/utils/types";
import { useQuery } from '@tanstack/react-query';

export const fetchReports = async () => {
    const { data } = await baseAxios.get<Report[]>("/reports");
    return data
}

export const useFetchReports = () => {

    const query = useQuery({
        queryFn: fetchReports,
        queryKey: ["reports"],
        initialData: []
    })

    return [query.data, query] as const
}