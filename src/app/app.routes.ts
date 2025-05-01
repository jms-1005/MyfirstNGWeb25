import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { VideosComponent } from './videos/videos.component';
import { ProgramComponent } from './program/program.component';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'email', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'about-us', component: AboutComponent},
  { path: 'tasklist', component: TasklistComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'program', component: ProgramComponent},
  { path: 'students', component: StudentsComponent}
];
