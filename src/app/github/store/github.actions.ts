
import { User } from "./github.model";
import { Action } from "@ngrx/store";

export enum GithubActionTypes {
    RETRIEVE_USER = '[github] RETRIEVE_USER',
    RETRIEVE_USER_SUCCESS = '[github] RETRIEVE_USER_SUCCESS',
    RETRIEVE_USER_ERROR = '[github] RETRIEVE_USER_ERROR'
  }
export class RetrieveUser implements Action {
    readonly type = GithubActionTypes.RETRIEVE_USER;

    constructor(public payload: User) { }
}


export class RetrieveUserSuccess implements Action {
    readonly type = GithubActionTypes.RETRIEVE_USER_SUCCESS

    constructor(public payload: any) { }
}

export class RetrieveUserError implements Action {
    readonly type = GithubActionTypes.RETRIEVE_USER_ERROR

    constructor(public payload: any) { }
}

export type GithubActions = RetrieveUser | RetrieveUserSuccess | RetrieveUserError