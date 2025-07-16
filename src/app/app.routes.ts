import { Routes } from '@angular/router';
import { AuthGuardOnElectionCandidates } from '../auth.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'vms',
    },
    {
        path: 'vms',
        loadChildren: () => import('../app/authentications/authentications.routes').then((m) => m.AuthenticationStudentRoutes),
    },
    {
        path: 'election',
        loadChildren: () => import('../app/candidates/candidates.routes').then((r) => r.CandidateElectionRoot),
        canActivate: [AuthGuardOnElectionCandidates]
    }
];
