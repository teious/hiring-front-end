import { UserState } from "./github.model";
import { GithubActions, GithubActionTypes } from "./github.actions";

const initialState: UserState = {
    loading: false
}
export function githubReducer(state: UserState = initialState, action: GithubActions ): UserState {
    switch (action.type) {
        case GithubActionTypes.RETRIEVE_USER:
        return {
            user: action.payload,
            repos: null,
            loading: true
        }
        case GithubActionTypes.RETRIEVE_USER_SUCCESS:
        return {
            ...state,
            repos: action.payload,
            loading: false
        }
        case GithubActionTypes.RETRIEVE_USER_ERROR:
        return {
            ...state,
            error: action.payload,
            loading: false
        }
        default: {
            return state;
        }
    }
}