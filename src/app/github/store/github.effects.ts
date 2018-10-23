import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  RetrieveUser,
  GithubActionTypes,
  RetrieveUserSuccess,
  RetrieveUserError
} from "./github.actions";
import {
  distinctUntilChanged,
  switchMap,
  map,
  catchError
} from "rxjs/operators";
import { GithubService } from "../github.service";

@Injectable()
export class GithubEffects {
  constructor(
    private actions$: Actions,
    private githubService: GithubService
  ) {}
  @Effect()
  retrieveUser = () =>
    this.actions$.pipe(
      ofType<RetrieveUser>(GithubActionTypes.RETRIEVE_USER),
      distinctUntilChanged((x, y) => x.payload.id === y.payload.id),
      switchMap((action: RetrieveUser) =>
        this.githubService.getUserRepos(action.payload.login).pipe(
          map(repos => new RetrieveUserSuccess(repos)),
          catchError(error => of(new RetrieveUserError(error)))
        )
      )
    );
}
