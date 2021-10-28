import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserauthGuard } from './userauth.guard';

import { HomeComponent } from './home/home.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedFriendsComponent } from './newsfeed-friends/newsfeed-friends.component';
import { NewsfeedImagesComponent } from './newsfeed-images/newsfeed-images.component';
import { NewsfeedMessagesComponent } from './newsfeed-messages/newsfeed-messages.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineAboutComponent } from './timeline-about/timeline-about.component';
import { TimelineAlbumComponent } from './timeline-album/timeline-album.component';
import { TimelineFriendsComponent } from './timeline-friends/timeline-friends.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NewsfeedcontentComponent } from './newsfeedcontent/newsfeedcontent.component';
import { FriendscontentComponent } from './friendscontent/friendscontent.component';
import { MessagescontentComponent } from './messagescontent/messagescontent.component';
import { ImagescontentComponent } from './imagescontent/imagescontent.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { TimelinecontentComponent } from './timelinecontent/timelinecontent.component';
import { AboutcontentComponent } from './aboutcontent/aboutcontent.component';
import { AlbumcontentComponent } from './albumcontent/albumcontent.component';
import { TimelinefriendscontentComponent } from './timelinefriendscontent/timelinefriendscontent.component';
import { EpadminComponent } from './epadmin/epadmin.component';
import { CpadminComponent } from './cpadmin/cpadmin.component';
import { EpuserComponent } from './epuser/epuser.component';
import { CpuserComponent } from './cpuser/cpuser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: NewsfeedcontentComponent,
      },
      {
        path: 'mynewsfeed',
        component: NewsfeedcontentComponent,
      },
      {
        path: 'friends',
        component: FriendscontentComponent,
      },
      {
        path: 'images',
        component: ImagescontentComponent,
      },
      {
        path: 'messages',
        component: MessagescontentComponent,
      },
    ],
  },
  {
    path: 'newsfeedfriends',
    component: NewsfeedFriendsComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: FriendscontentComponent,
      },
      {
        path: 'friends',
        component: FriendscontentComponent,
      },
      {
        path: 'mynewsfeed',
        component: NewsfeedcontentComponent,
      },
      {
        path: 'images',
        component: ImagescontentComponent,
      },
      {
        path: 'messages',
        component: MessagescontentComponent,
      },
    ],
  },
  {
    path: 'newsfeedimages',
    component: NewsfeedImagesComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: ImagescontentComponent,
      },
      {
        path: 'images',
        component: ImagescontentComponent,
      },
      {
        path: 'mynewsfeed',
        component: NewsfeedcontentComponent,
      },
      {
        path: 'friends',
        component: FriendscontentComponent,
      },
      {
        path: 'messages',
        component: MessagescontentComponent,
      },
    ],
  },
  {
    path: 'newsfeedmessages',
    component: NewsfeedMessagesComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: MessagescontentComponent,
      },
      {
        path: 'messages',
        component: MessagescontentComponent,
      },
      {
        path: 'mynewsfeed',
        component: NewsfeedcontentComponent,
      },
      {
        path: 'images',
        component: ImagescontentComponent,
      },
      {
        path: 'friends',
        component: FriendscontentComponent,
      },
    ],
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: TimelinecontentComponent,
      },
      {
        path: 'tcontent',
        component: TimelinecontentComponent,
      },
      {
        path: 'about',
        component: AboutcontentComponent,
      },
      {
        path: 'album',
        component: AlbumcontentComponent,
      },
      {
        path: 'tfriends',
        component: TimelinefriendscontentComponent,
      },
    ],
  },
  {
    path: 'timelineabout',
    component: TimelineAboutComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: AboutcontentComponent,
      },
      {
        path: 'about',
        component: AboutcontentComponent,
      },
      {
        path: 'tcontent',
        component: TimelinecontentComponent,
      },
      {
        path: 'album',
        component: AlbumcontentComponent,
      },
      {
        path: 'tfriends',
        component: TimelinefriendscontentComponent,
      },
    ],
  },
  {
    path: 'timelinealbum',
    component: TimelineAlbumComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: AlbumcontentComponent,
      },
      {
        path: 'album',
        component: AlbumcontentComponent,
      },
      {
        path: 'tcontent',
        component: TimelinecontentComponent,
      },
      {
        path: 'about',
        component: AboutcontentComponent,
      },
      {
        path: 'tfriends',
        component: TimelinefriendscontentComponent,
      },
    ],
  },
  {
    path: 'timelinefriends',
    component: TimelineFriendsComponent,
    canActivate: [UserauthGuard],
    children: [
      {
        path: '',
        component: TimelinefriendscontentComponent,
      },
      {
        path: 'tfriends',
        component: TimelinefriendscontentComponent,
      },
      {
        path: 'tcontent',
        component: TimelinecontentComponent,
      },
      {
        path: 'about',
        component: AboutcontentComponent,
      },
      {
        path: 'album',
        component: AlbumcontentComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'userhome',
    component: UserhomeComponent,
    canActivate: [UserauthGuard],
  },
  {
    path: 'adminhome',
    component: AdminhomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageusers',
    component: ManageusersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cpadmin',
    component: CpadminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'epadmin',
    component: EpadminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cpuser',
    component: CpuserComponent,
    canActivate: [UserauthGuard],
  },
  {
    path: 'epuser',
    component: EpuserComponent,
    canActivate: [UserauthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
