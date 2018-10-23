import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserState, State } from "./github.model";

export const selectGithub = createFeatureSelector<State, UserState>(
    'github'
)

export const selectUser = createSelector(selectGithub, (state)=> state.user);

export const selectRepos = createSelector(selectGithub, (state)=> state.repos);