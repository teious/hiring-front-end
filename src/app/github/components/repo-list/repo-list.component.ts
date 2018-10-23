import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-repo-list",
  templateUrl: "./repo-list.component.html",
  styleUrls: ["./repo-list.component.scss"]
})
export class RepoListComponent implements OnInit {
  @Input("repos")
  repos: any[];

   getLangIconClass(language: string): string {
    if (typeof language === "string") {
      const lang = language.toLowerCase();
      return `devicon-${lang}-plain colored`;
    }
    return "";
  }

   formatDate(date:string): string {
    return new Date(date).toLocaleDateString();
  }
  constructor() {}

  ngOnInit() {}
}
