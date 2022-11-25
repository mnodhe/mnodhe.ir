import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { axiosstackoverflowInstance } from "../../../Helper/axiosInstance";
import { IStackoverflow } from "../../../Helper/Interfaces/stackoverflowInterface";
import { queryKeys } from "../../../Helper/react-query/constants";


async function API_GetStackoverflowUserData() {
    const { data } = await axiosstackoverflowInstance.get('/users/14099191?order=desc&sort=reputation&site=stackoverflow');
    return data
}
export function useStackoverflow(): IStackoverflow{
    const fallback: UseQueryResult<IStackoverflow> = {} as UseQueryResult<IStackoverflow>
    const { data = fallback } = useQuery([queryKeys.stackoverflow], API_GetStackoverflowUserData)
    return data
}

