import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'vms',
        loadChildren: () => import('../app/authentications/authentications.routes').then((m) => m.AuthenticationStudentRoutes),
    },
    {
        path: 'election',
        loadChildren: () => import('../app/candidates/candidates.routes').then((r) => r.CandidateElectionRoot),
    }
];
