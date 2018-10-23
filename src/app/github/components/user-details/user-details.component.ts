import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../store/github.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input('user') user: User;
  userImg
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.userImg = this.sanitizer.bypassSecurityTrustStyle(`url(${this.user.avatar_url})`)

  }

}
