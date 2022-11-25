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
  posts: Observable<Post[]>;

  constructor(
    private postService: PostService) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(): void {
    this.posts = this.postService.posts;
    this.postService.loadAll();
  }

}
