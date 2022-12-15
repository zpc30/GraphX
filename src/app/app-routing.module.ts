import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CommentsComponent } from './graphics-list/comments/comments.component';
import { GraphicsListComponent } from './graphics-list/graphics-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'graphics', component: GraphicsListComponent, children: [
    { path: ':id', component: CommentsComponent}
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
