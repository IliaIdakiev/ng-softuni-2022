import { RouterModule, Routes } from "@angular/router";
import { LazyComponent } from "./lazy/lazy.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LazyComponent
  }
];

export const LazyRoutingModule = RouterModule.forChild(routes);
