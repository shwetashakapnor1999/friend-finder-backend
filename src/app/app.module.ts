import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { RequesturlsService } from './requesturls.service';
import { AuthGuard } from './auth.guard';
import { UserauthGuard } from './userauth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineAboutComponent } from './timeline-about/timeline-about.component';
import { TimelineAlbumComponent } from './timeline-album/timeline-album.component';
import { TimelineFriendsComponent } from './timeline-friends/timeline-friends.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedFriendsComponent } from './newsfeed-friends/newsfeed-friends.component';
import { NewsfeedImagesComponent } from './newsfeed-images/newsfeed-images.component';
import { NewsfeedMessagesComponent } from './newsfeed-messages/newsfeed-messages.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { NewsfeedcontentComponent } from './newsfeedcontent/newsfeedcontent.component';
import { FriendscontentComponent } from './friendscontent/friendscontent.component';
import { ImagescontentComponent } from './imagescontent/imagescontent.component';
import { MessagescontentComponent } from './messagescontent/messagescontent.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { TimelinecontentComponent } from './timelinecontent/timelinecontent.component';
import { AboutcontentComponent } from './aboutcontent/aboutcontent.component';
import { AlbumcontentComponent } from './albumcontent/albumcontent.component';
import { TimelinefriendscontentComponent } from './timelinefriendscontent/timelinefriendscontent.component';
import { CpadminComponent } from './cpadmin/cpadmin.component';
import { EpadminComponent } from './epadmin/epadmin.component';
import { CpuserComponent } from './cpuser/cpuser.component';
import { EpuserComponent } from './epuser/epuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ContactComponent,
    LoginComponent,
    TimelineComponent,
    TimelineAboutComponent,
    TimelineAlbumComponent,
    TimelineFriendsComponent,
    NewsfeedComponent,
    NewsfeedFriendsComponent,
    NewsfeedImagesComponent,
    NewsfeedMessagesComponent,
    AdminhomeComponent,
    UserhomeComponent,
    NewsfeedcontentComponent,
    FriendscontentComponent,
    ImagescontentComponent,
    MessagescontentComponent,
    ManageusersComponent,
    TimelinecontentComponent,
    AboutcontentComponent,
    AlbumcontentComponent,
    TimelinefriendscontentComponent,
    CpadminComponent,
    EpadminComponent,
    CpuserComponent,
    EpuserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, RequesturlsService, AuthGuard, UserauthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
