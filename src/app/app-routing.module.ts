import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GuestbookComponent } from './pages/guestbook/guestbook.component';
import { PostdetailComponent } from './pages/postdetail/postdetail.component';

const routes: Routes = [
  { path: 'postdetail/:id', component: PostdetailComponent },
  { path: 'guestbook', component: GuestbookComponent },
  { path: '', redirectTo:'postdetail/1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
