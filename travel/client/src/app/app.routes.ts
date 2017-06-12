import {Routes, RouterModule} from "@angular/router";
import { MainComponent } from "./main/main.component"
import { MainAboutComponent } from "app/main/main-about/main-about.component";
import { AboutComponent } from "app/about/about.component";
import { HelpComponent } from "app/help/help.component";



const APP_ROUTES: Routes=[
  {path: "", component: MainComponent},
  {path: "about", component: AboutComponent},
  {path: "help", component: HelpComponent},
  




]

export const routing=RouterModule.forRoot(APP_ROUTES)
