import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NguiMenuModule } from '@ngui/menu';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GravatarComponent } from './gravatar/gravatar.component';
import { GravatarService } from './gravatar/gravatar.service';



// imports navigate module
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { MovieData } from './movies/movie-data';

import { AppRoutingModule } from './app-routing.module';


import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
/* Feature Modules */
import { UserModule } from './user/user.module';
// end navigate module

@NgModule({
  declarations: [
    AppComponent,
    GravatarComponent,
    MenuComponent,
    ShellComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NguiMenuModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MovieData, { delay: 1000, dataEncapsulation: false }),
    UserModule,
    AppRoutingModule
  ],
  providers: [GravatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
