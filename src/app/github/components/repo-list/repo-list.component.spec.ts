import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListComponent } from './repo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ RepoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
