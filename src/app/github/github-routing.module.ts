import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchComponent } from "./components/search/search.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  {
    path: "",
    component: SearchComponent
  },
  {
    path:'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule {}
