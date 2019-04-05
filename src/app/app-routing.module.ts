import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { SubmitJobComponent } from './submit-job/submit-job.component';
import { MyAppAuthGuard } from './my-app-auth.guard';
import { CompRegistrationComponent } from './comp-registration/comp-registration.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { DisPostedJobsComponent } from './dis-posted-jobs/dis-posted-jobs.component';

const routes: Routes = [
{path:'', redirectTo:'/home', pathMatch:'full'},

{path:'home', component:HomeComponent},
{path:'display', component:DisplayDataComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'my-login', component:MyLoginComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'company-register', component:CompRegistrationComponent},
{path:'admin-dash', canActivate:[MyAppAuthGuard], component:AdminDashComponent},
{path:'candidate-profile', canActivate:[MyAppAuthGuard], component:CandidateProfileComponent},
{path:'comp-login', component:CompLoginComponent},
{path:'emp-profile', canActivate:[MyAppAuthGuard], component:EmployerProfileComponent},
{path:'submit-job', canActivate:[MyAppAuthGuard], component:SubmitJobComponent},
{path:'jobs', component:JobsComponent},
{path:'applicants', component:AppliedCandidatesComponent},
{path:'all-jobs', component:AllJobsComponent},
{path:'display-posted-jobs', component:DisPostedJobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
