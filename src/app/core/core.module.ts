import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from "./core.state";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: "Angular NgRx Material Starter"
        })
  ],
  declarations: []
})
export class CoreModule {}
