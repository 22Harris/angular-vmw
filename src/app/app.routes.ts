import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'vms',
        loadChildren: () => import('../app/authentications/authentications.routes').then((m) => m.AuthenticationStudentRoutes),
    }
];
