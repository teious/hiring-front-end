import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { GithubRoutingModule } from './github-routing.module';
import { GithubService } from './github.service';
import { StoreModule } from '@ngrx/store';
import { githubReducer } from './store/github.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GithubEffects } from './store/github.effects';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GithubRoutingModule,
    StoreModule.forFeature('github', githubReducer),
    EffectsModule.forFeature([GithubEffects])
  ],
  declarations: [SearchComponent, UserComponent, UserDetailsComponent, RepoListComponent],
  providers: [GithubService]
})
export class GithubModule { }
