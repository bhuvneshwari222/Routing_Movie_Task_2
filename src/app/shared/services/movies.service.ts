import { Injectable } from '@angular/core';
import { Imovie, ImovieResp } from '../models/movie';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesArr: Imovie[] = [
    {
      movieId: "MOV104",
      movieName: "Titanic",
      movieStatus: "Classic",
      isDubbed: true,
      rating: 4.9,
      genre: "Romance, Drama",
      releaseYear: 1997,
      description:
        "Titanic is an epic romantic drama that follows the unforgettable love story of Jack and Rose aboard the ill-fated RMS Titanic. Their journey unfolds against one of history's most tragic maritime disasters, blending romance, sacrifice, and survival.",
      poster: "https://cdn.mos.cms.futurecdn.net/X2HayNRX94wPEBtGqg7MJE.jpg"
    },
    {
      movieId: "MOV101",
      movieName: "The Call of the Wild 3D",
      movieStatus: "Released",
      isDubbed: true,
      rating: 4.8,
      genre: "Adventure fiction, naturalism, and animal fiction.",
      releaseYear: 2020,
      description:
        "The Call of the Wild was originally published as a novel by Jack London in 1903. If you are asking about its most prominent screen adaptations, the major films were released in 1935, 1972, and the recent Harrison Ford version in 2020",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38ttp6xQ7Kilkr2qhLWEaFNJ1wxiDjt-DVyoYb7Dmn4IA89OrjcwhMcqW8F4oL7oM4zdid0nBHACvMGs8WxpFpiuFgNLVjly7c2KDKg&s=10"
    },
    {
      movieId: "MOV103",
      movieName: "StartUp",
      movieStatus: "Released",
      isDubbed: true,
      rating: 3.2,
      genre: "Drama, Comedy",
      releaseYear: 2019,
      description:
        "A coming-of-age story about young entrepreneurs chasing their dreams while overcoming failures, friendships, and unexpected opportunities.",
      poster:
        "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRp2sh9CA9rEG6xt_8mN3lBNcJBBvY1BYsw6I2cgqdj8LbSF1G2YlzkbJfre8CV4gUKfet8q6l_dsgLHcejqb1bZgNW_Nrsi3Hi1.jpg?r=740"
    }
  ];

  setFirstElemntSub$ : Subject<boolean> = new Subject<boolean>()

  constructor() { }

  fetchMoviesArr(): Observable<Imovie[]> {
    return of(this.moviesArr)
  }

  getMovieById(id: string): Observable<Imovie> {
    let movie = this.moviesArr.find(m => m.movieId === id)!;
    return of(movie)
  }

  removeMovie(id: string): Observable<ImovieResp<Imovie>>{
    let getIndex = this.moviesArr.findIndex(m => m.movieId === id)
    let removedMovie = this.moviesArr.splice(getIndex,1);
    return of({
      msg: `The movie ${removedMovie[0].movieName} with id ${removedMovie[0].movieId} is removed successfully!!!`,
      data: removedMovie[0]
    })
  }

  addMovie(newMovie: Imovie): Observable<ImovieResp<Imovie>>{
    this.moviesArr.unshift(newMovie);
    return of({
      msg: `The new movie ${newMovie.movieName} is added successfully!!!`,
      data: newMovie
    })
  }
  
  updateMovie(updatedMovie: Imovie): Observable<ImovieResp<Imovie>>{
    let getIndex = this.moviesArr.findIndex(m => m.movieId === updatedMovie.movieId)
    this.moviesArr[getIndex] = updatedMovie;
    return of({
      msg: `The movie ${updatedMovie.movieName} with id ${updatedMovie.movieId} is updated successfully!!!`,
      data: updatedMovie
    })
  }
}
