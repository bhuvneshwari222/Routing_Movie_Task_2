import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Imovie } from "../models/movie";
import { MoviesService } from "./movies.service";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MoviesResolver implements Resolve<Imovie | Imovie[]>{
    
    private _movieService = inject(MoviesService);

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Imovie | Imovie[] | Observable<Imovie | Imovie[]> | Promise<Imovie | Imovie[]> {
        let movieId = route.paramMap.get('movieID');
        if(movieId){
            return this._movieService.getMovieById(movieId);
        }else{
            return this._movieService.fetchMoviesArr();
        }
    }
}