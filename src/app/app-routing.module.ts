import { NgModule } from "@angular/core";
import { HomeDashboardComponent } from "./shared/components/home-dashboard/home-dashboard.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { MoviesDashboardComponent } from "./shared/components/movies-dashboard/movies-dashboard.component";
import { MovieFormComponent } from "./shared/components/movies-dashboard/movie-form/movie-form.component";
import { MovieDetailsComponent } from "./shared/components/movies-dashboard/movie-details/movie-details.component";
import { FairsDashboardComponent } from "./shared/components/fairs-dashboard/fairs-dashboard.component";
import { ActorsDashboardComponent } from "./shared/components/actors-dashboard/actors-dashboard.component";
import { ActorsFormComponent } from "./shared/components/actors-dashboard/actors-form/actors-form.component";
import { ActorsDetailsComponent } from "./shared/components/actors-dashboard/actors-details/actors-details.component";



const routes: Routes = [
    {
        path: 'home',
        component: HomeDashboardComponent
    },
    {
        path: '',
        redirectTo : 'home',
        pathMatch: 'full'
    },
    {
        path: 'actors',
        component: ActorsDashboardComponent,
        children: [
            {
                path: 'addActor',
                component: ActorsFormComponent
            },
            {
                path: ':actorID',
                component: ActorsDetailsComponent
            },
            {
                path: ':actorID/edit',
                component: ActorsFormComponent
            }
        ]
    },
    {
        path: 'movies',
        component: MoviesDashboardComponent,
        children: [
            {
                path: 'addMovie',
                component: MovieFormComponent
            },
            {
                path: ':movieID',
                component: MovieDetailsComponent
            },
            {
                path: ':movieId/edit',
                component: MovieFormComponent
            }
        ]
    },
    {
        path: 'fairs',
        component: FairsDashboardComponent
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}