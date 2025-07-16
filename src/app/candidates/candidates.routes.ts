import { Route } from "@angular/router";
import { CandidatesRootComponent } from "./containers/candidates-root/candidates-root.component";
import { CandidateElectionListRootComponent } from "./containers/candidate-election-list-root/candidate-election-list-root.component";
import { CandidateElectionVoteRootComponent } from "./containers/candidate-election-vote-root/candidate-election-vote-root.component";

export const CandidateElectionRoot: Route[] = [
    {
        path: '',
        component: CandidatesRootComponent,
        children: [
            {
                path: 'election-posts',
                component: CandidateElectionListRootComponent
            },
            {
                path: 'candidates-vote',
                component: CandidateElectionVoteRootComponent
            }
        ]

    }
]