import {
    ApiResponse
} from "apisauce"
import {
    CustomToast
} from "../../helpers"
import {
    API
} from "."
import APIs, {
    ApisTypes
} from "./APIs"
import {
    disableLoader,
    enableLoader
} from "../reducers/loadingReducer"
import {
    dispatch,
    store
} from "../store/configureStore"

type ApiMethodsTypes = "get" | "post" | "put" | "delete" | "patch"

export async function request<T, R = null>(
    { method,
        endPoint,
        callback,
        body,
        params }:
        {
            method: ApiMethodsTypes,
            endPoint: keyof ApisTypes,
            body?: R,
            callback?: (res: ApiResponse<T>) => void,
            params?: string
        }
) {

    const token = store.getState().userReducer.token
    dispatch(enableLoader(endPoint))
    if (token) API.setHeader('Authorization', `Bearer ${token}`);
    const res: ApiResponse<T & ErrorResponseType> = await API[method](`${APIs[endPoint]}${params ? params : ""}`, body ? body : {})

    dispatch(disableLoader(endPoint))
    try {
        if (callback)
            callback(res)

        if (res.ok)
            return res.data
        else
            handilErrors(res.data)
    }
    catch {

        CustomToast("Network error", "error")
    }
}

const handilErrors = (data: any) => {
    let key = Object.keys(data)[0];
    if (typeof data[key] !== "string") {
        let key2 = Object.keys(data[key])[0];
        CustomToast(data[key][key2], "error")

    }
    else if (Array.isArray(data[key])) {
        CustomToast(data[key][0], "error")
    } else CustomToast(data.error || data.detail || data.details, "error")
};

type ErrorResponseType = {
    detail: string,
    code: 'token_not_valid',
    messages: Array<{
        token_class: 'AccessToken',
        token_type: 'access',
        message: string
    }>
}
