import { NgModule } from "@angular/core";
import { HomeDashboardComponent } from "./shared/components/home-dashboard/home-dashboard.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { MoviesDashboardComponent } from "./shared/components/movies-dashboard/movies-dashboard.component";
import { MovieFormComponent } from "./shared/components/movies-dashboard/movie-form/movie-form.component";
import { MovieDetailsComponent } from "./shared/components/movies-dashboard/movie-details/movie-details.component";
import { ActorsDashboardComponent } from "./shared/components/actors-dashboard/actors-dashboard.component";
import { ActorsFormComponent } from "./shared/components/actors-dashboard/actors-form/actors-form.component";
import { ActorsDetailsComponent } from "./shared/components/actors-dashboard/actors-details/actors-details.component";
import { OttPlatformComponent } from "./shared/components/ott-platform/ott-platform.component";
import { OttDetailsComponent } from "./shared/components/ott-platform/ott-details/ott-details.component";
import { ActorsResolver } from "./shared/services/actors.resolver";
import { MoviesResolver } from "./shared/services/movies.resolver";
import { AuthComponent } from "./shared/components/auth/auth.component";
import { AuthGuard } from "./shared/services/auth.guard";
import { UserRoleGuard } from "./shared/services/userRole.guard";


const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'home',
        component: HomeDashboardComponent,
        title: 'Home',
        canActivate: [AuthGuard, UserRoleGuard],
        data: {
            userRoles: ['admin', 'superAdmin', 'buyer']
        }
    },
    {
        path: 'actors',
        component: ActorsDashboardComponent,
        title: 'Acotrs',
        canActivate: [AuthGuard, UserRoleGuard],
        data: {
            userRoles: ['admin', 'superAdmin']
        },
        resolve: {
            actors: ActorsResolver
        },
        children: [
            {
                path: 'addActor',
                component: ActorsFormComponent
            },
            {
                path: ':actorID',
                component: ActorsDetailsComponent,
                resolve: {
                    actor: ActorsResolver
                }
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
        title: 'Movies',
        canActivate: [AuthGuard, UserRoleGuard],
        data: {
            userRoles: ['admin', 'superAdmin', 'buyer']
        },
        resolve: {
            movies: MoviesResolver
        },
        children: [
            {
                path: 'addMovie',
                component: MovieFormComponent
            },
            {
                path: ':movieID',
                component: MovieDetailsComponent,
                resolve: {
                    movie: MoviesResolver
                },
            },
            {
                path: ':movieId/edit',
                component: MovieFormComponent
            }
        ]
    },
    {
        path: 'ottPlatforms',
        component: OttPlatformComponent,
        title: 'OttPlatforms',
        canActivate: [AuthGuard, UserRoleGuard],
        data: {
            userRoles: ['superAdmin']
        },
        children: [
            {
                path: ':ottID',
                component: OttDetailsComponent
            }
        ]
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
export class AppRoutingModule { }