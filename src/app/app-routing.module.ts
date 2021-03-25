import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {PostComponent} from './post/post.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'page/:pageNum', component: IndexComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
