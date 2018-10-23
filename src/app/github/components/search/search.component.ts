import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, switchMap, pluck } from 'rxjs/operators'
import { GithubService } from '../../github.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/core.state';
import { RetrieveUser } from '../../store/github.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  users$ = this.searchControl.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(300),
    switchMap((usr)=> this.githubService.searchUsers(usr)),
    pluck('items')
  )
  constructor(private githubService: GithubService, private store: Store<AppState>, private router: Router) {
   }

  ngOnInit() {
  }
  see(e:MatAutocompleteSelectedEvent){
    this.router.navigate(['/user'])
    this.store.dispatch(new RetrieveUser(e.option.value));
  }
}
