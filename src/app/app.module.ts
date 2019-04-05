import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedJobsComponent } from './featured-jobs/featured-jobs.component';
import { JobIndustryComponent } from './job-industry/job-industry.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyServiceService } from './my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayDataComponent } from './display-data/display-data.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { SubmitJobComponent } from './submit-job/submit-job.component';
import { MyAppAuthGuard } from './my-app-auth.guard';
import { CompRegistrationComponent } from './comp-registration/comp-registration.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { DisPostedJobsComponent } from './dis-posted-jobs/dis-posted-jobs.component';
/*import { ToastrService } from 'ngx-toastr';*/


@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    MainHeaderComponent,
    SliderComponent,
    FeaturedJobsComponent,
    JobIndustryComponent,
    TestimonialsComponent,
    PartnersComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    DisplayDataComponent,
    CandidateProfileComponent,
    SubmitJobComponent,
    CompRegistrationComponent,
    CompLoginComponent,
    EmployerProfileComponent,
    JobsComponent,
    AllJobsComponent,
    ApplyForJobComponent,
    MyLoginComponent,
    AdminDashComponent,
    AppliedCandidatesComponent,
    DisPostedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ],
  providers: [MyServiceService,MyAppAuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }
