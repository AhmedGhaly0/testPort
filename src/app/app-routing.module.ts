import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path:"" , component: HomeComponent},
  {path:"About",  component: AboutComponent},
  {path:"portfolio",  component: PortfolioComponent},
  {path:"service",  component: ServiceComponent},
  {path:"skills",  component: SkillsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
