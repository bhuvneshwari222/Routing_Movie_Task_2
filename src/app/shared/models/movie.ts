export interface Imovie {
    movieId: string;
    movieName: string;
    movieStatus: "Released" | "ComingSoon" | "Classic";
    isDubbed: boolean;
    rating: number;
    genre: string;
    releaseYear: number;
    description: string;
    poster: string;
}

export interface ImovieResp<T>{
    msg: string,
    data: T
}