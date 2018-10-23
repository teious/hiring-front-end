import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./store/github.model";

const BASE_URL = "https://api.github.com";

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}


  searchUsers(query: string): Observable<{ items: User[] }> {
    return this.http.get<{ items: User[] }>(
      `${BASE_URL}/search/users?q=${query}`
    );
  }

  getUserRepos(user:string): Observable<any> {
    return this.http.get(`${BASE_URL}/users/${user}/repos`);
  }
}
