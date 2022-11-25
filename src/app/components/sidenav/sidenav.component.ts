import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean;

  posts: Observable<Post[]>;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private postService: PostService,
    private router: Router) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.posts = this.postService.posts;
    this.postService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

}
