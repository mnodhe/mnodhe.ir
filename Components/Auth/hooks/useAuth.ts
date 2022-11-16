import { axiosInstance } from "../../../Helper/axiosInstance";
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from "../../../Helper/react-query/constants";


async function API_RefreshToken() {
    const { data } = await axiosInstance.get('/CountryAndCity/GetAllCity');
    return data
}


export function useAuth(): any {
    const fallback: any = []
    const { data = fallback } = useQuery([queryKeys.refreshToken], API_RefreshToken)
    return data
}