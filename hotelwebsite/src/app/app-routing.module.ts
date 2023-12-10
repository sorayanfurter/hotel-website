import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {path: 'collection', component: CollectionComponent},
    {path: 'contact', component: ContactComponent},
    // Define routes for other components
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
