import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {PostComponent} from './post/post.component';
import {AboutComponent} from './about/about.component';
import {PublicationsComponent} from './publications/publications.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'articles/page/:pageNum', component: IndexComponent},
  {path: 'articles/post/:id', component: PostComponent},
  {path: 'publications', component: PublicationsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
