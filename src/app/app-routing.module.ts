import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuFilterComponent } from './component/menu-filter/menu-filter.component';


const routes: Routes = [
  {path: "", component: MenuFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
