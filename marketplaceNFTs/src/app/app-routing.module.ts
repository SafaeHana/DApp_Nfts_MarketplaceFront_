import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './components/explore/explore.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { UploadPropComponent } from './components/user/upload-prop/upload-prop.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { PublicProfileComponent } from './components/user/public-profile/public-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { NAuthGuard } from './guards/nauth.guard';
import { FaqComponent } from './components/faq/faq.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [

  //paths
  {path:'home',component:HomepageComponent},
  {path:'uploadprop',component:UploadPropComponent},
  {path:'explore',component:AnnoncesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'faq',component:FaqComponent},
  {path:'aboutus',component:AboutusComponent},





  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
