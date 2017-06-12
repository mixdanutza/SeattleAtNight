import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainWelcomeComponent } from './main/main-welcome/main-welcome.component';
import { MainAboutComponent } from './main/main-about/main-about.component';
import { MainMustComponent } from './main/main-must/main-must.component';

import { routing } from "./app.routes";
import {MainService} from './main/main.service';
import { MainRainComponent } from './main/main-rain/main-rain.component';
import { MainRecommendationComponent } from './main/main-recommendation/main-recommendation.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HelpComponent } from './help/help.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainWelcomeComponent,
    MainAboutComponent,
    MainMustComponent,
    MainRainComponent,
    MainRecommendationComponent,
    AboutComponent,
    NavigationComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
