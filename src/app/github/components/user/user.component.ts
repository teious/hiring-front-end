import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "../../store/github.model";
import { selectUser, selectRepos } from "../../store/github.selectors";
import { map, takeUntil } from "rxjs/operators";

import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  unsubscribe$ = new Subject<void>();
  loading$ = this.store.select(({ github }) => github.loading);
  loading = false;
  user$ = this.store.pipe(
    select(selectUser),
    map(usr => (usr ? usr : this.router.navigate([""])))
  );

  repos$ = this.store.pipe(select(selectRepos));

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.loading$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((isLoading)=> this.loading = isLoading)
  
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
