import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Login',
      loginRequired: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Register',
      loginRequired: false
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Logout',
      loginRequired: true
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      loginRequired: true
    }
  }
];

// const sameRoutes: Routes = [
//   {
//     path: 'auth',
//     children: [
//       {
//         path: 'login',
//         component: LoginComponent
//       },
//       {
//         path: 'register',
//         component: RegisterComponent
//       },
//       {
//         path: 'logout',
//         component: LogoutComponent
//       },
//       {
//         path: 'profile',
//         component: ProfileComponent
//       }
//     ]
//   }
// ];

export const AuthRoutingModule = RouterModule.forChild(routes);
