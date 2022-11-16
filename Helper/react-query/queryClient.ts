import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";



export function queryErrorHandler(error: unknown): void {
    const id = 'react-query-error'
    const title = error instanceof Error ? error.toString().replace(/^Error:\s*/, '') : 'Error connectiong to the server'
    toast.error(title, { toastId: id })
}


export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: queryErrorHandler
        }
    }
});