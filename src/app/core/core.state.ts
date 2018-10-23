import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";

export const reducers: ActionReducerMap<AppState> ={
    router: routerReducer
}

export const selectRouterState = createFeatureSelector<AppState, RouterReducerState>('router');

export interface AppState {
    router: RouterReducerState
}