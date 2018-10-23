import { HttpErrorResponse } from "@angular/common/http";
import { AppState } from "src/app/core/core.state";


export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
}
export interface UserState {
    user?: User;
    repos?: any[];
    loading: boolean,
    error?: HttpErrorResponse
}

export interface State extends AppState {
    github: UserState;
}