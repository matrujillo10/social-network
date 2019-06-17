import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { WallComponent } from './wall/wall.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: 'friends', component: FriendsComponent },
      { path: 'wall', component: WallComponent },
      { path: '', redirectTo: 'wall', pathMatch: 'full' },
    ]
  },
  { path: 'feed', component: FeedComponent },
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
