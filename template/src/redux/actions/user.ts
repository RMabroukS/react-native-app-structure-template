import {
    ApiResponse
} from "apisauce";
import {
    UserTypes
} from "../../@types";
import {
    setUserProfile
} from "../reducers/userReducer";
import {
    dispatch
} from "../store/configureStore";
import {
    request
} from "../api/request";

export function getProfile(callback?: (res: ApiResponse<UserTypes>) => void) {
    return async () => {
        const response = await request<UserTypes>({
            method: "get",
            endPoint: "getProfile",
            callback
        })
        if (response) {
            dispatch(setUserProfile(response))
        }
    };
}

