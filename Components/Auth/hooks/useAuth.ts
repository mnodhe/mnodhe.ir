import { axiosInstance } from "../../../Helper/axiosInstance";
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { queryKeys } from "../../../Helper/react-query/constants";
import { toast } from "react-toastify";
import { APIResult } from "../../../Helper/Interfaces/APIResult";
import { RefreshToken_Res_result_Interface } from "../../../Helper/Interfaces/API_Interface";


async function API_RefreshToken() {
    const { data } = await axiosInstance.get('/CountryAndCity/GetAllCity');
    return data
}


export function useAuth(): UseQueryResult<APIResult<RefreshToken_Res_result_Interface>, unknown> {
    const fallback: UseQueryResult<APIResult<RefreshToken_Res_result_Interface>> = {} as UseQueryResult<APIResult<RefreshToken_Res_result_Interface>>
    const { data = fallback } = useQuery([queryKeys.refreshToken], API_RefreshToken)
    return data
}
export function usePrefetchAuth(): void {
    const queryClient = useQueryClient()
    queryClient.prefetchQuery([queryKeys.refreshToken], API_RefreshToken)
}