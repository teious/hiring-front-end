import { TestBed } from "@angular/core/testing";

import { GithubService } from "./github.service";
import { HttpClient } from "@angular/common/http";

describe("GithubService", () => {
  let httpClientSpy: {get: jasmine.Spy};
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({

    providers:[
      GithubService,
      {provide: HttpClient, useValue: httpClientSpy}
    ]
    });
  });

  it("should be created", () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });
});
