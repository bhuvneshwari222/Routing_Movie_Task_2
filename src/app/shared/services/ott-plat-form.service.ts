import { Injectable } from '@angular/core';
import { IottPlatform, IottPlatformResp } from '../models/ottPlatForms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OttPlatFormService {
  ottPlatformsArr: IottPlatform[] = [
    {
      ottId: "OTT103",
      platformName: "Disney+ Hotstar",
      subscriptionType: "Premium",
      monthlyPrice: 299,
      totalMovies: 5400,
      availableInIndia: true,
      foundedYear: 2015,
      description:
        "Disney+ Hotstar provides Disney content, Marvel movies, Star Wars, live cricket, and regional entertainment.",
      platformLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHfmlFbWmLjIWbADORA2raZn7QNPRx0VZHu5OAZ0iVgAAJH_-WH7WTd8&s=10"
    },
    {
      ottId: "OTT101",
      platformName: "Netflix",
      subscriptionType: "Premium",
      monthlyPrice: 649,
      totalMovies: 7500,
      availableInIndia: true,
      foundedYear: 1997,
      description:
        "Netflix is one of the world's leading streaming platforms, offering movies, TV shows, documentaries, and original content across multiple languages.",
      platformLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgtLm3ZPQVigj5iuZo85kJzCYlyhMs7-4pqeO5V5XYAUAyeen1fSmraM&s=10"
    },
    {
      ottId: "OTT102",
      platformName: "Amazon Prime Video",
      subscriptionType: "Annual",
      monthlyPrice: 299,
      totalMovies: 6800,
      availableInIndia: true,
      foundedYear: 2006,
      description:
        "Amazon Prime Video offers blockbuster movies, TV series, live sports, and Amazon Originals with Prime membership.",
      platformLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDt9zJrQbQiAt0LUoErdf9uiT5RsX-ZFcaCLGK21WRQ&s=10"
    },
    {
      ottId: "OTT104",
      platformName: "Sony LIV",
      subscriptionType: "Premium",
      monthlyPrice: 399,
      totalMovies: 3200,
      availableInIndia: true,
      foundedYear: 2013,
      description:
        "Sony LIV streams movies, TV shows, web series, sports, and Sony Entertainment Network content.",
      platformLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWqVjD2BkYAnHhOCs75H1SrvHQyyMUYahjGqqm9LQrg&s=10"
    }
  ];

  constructor() { }

  fetchOttPlatFormArr(): Observable<IottPlatform[]> {
    return of(this.ottPlatformsArr);
  }

  fetchOttPlatFormById(id: string): Observable<IottPlatform> {
    let platForm = this.ottPlatformsArr.find(p => p.ottId === id)!;
    return of(platForm);
  }
}
