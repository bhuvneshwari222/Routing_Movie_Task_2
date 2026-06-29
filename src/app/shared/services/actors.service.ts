import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IActor, IActorResp } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  actorsArr: IActor[] = [
    {
      actorId: "ACT102",
      actorName: "Kate Winslet",
      profession: "Lead Actress",
      biography: "Kate Elizabeth Winslet is an English actress. Primarily known for her roles as headstrong and complicated women in independent films.",
      profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/KateWinslet_%28cropped%29.jpg/500px-KateWinslet_%28cropped%29.jpg",
      movies: [
        "Titanic",
        "Eternal Sunshine of the Spotless Mind",
        "The Reader",
        "Avatar: The Way of Water"
      ],
      experienceYears: "30 Years",
      isActive: true,
      address: {
        current: {
          city: "West Wittering",
          state: "West Wittering",
          country: "United Kingdom",
          zipcode: "RG1"
        },
        permanent: {
          city: "West Wittering",
          state: "West Wittering",
          country: "United Kingdom",
          zipcode: "RG1"
        }
      },
      isAddressSame: true
    },
    {
      actorId: "ACT103",
      actorName: "Nam Joo Hyuk",
      profession: "Model and actor",
      biography: "Nam Joo Hyuk was born on February 22, 1994 in Busan, South Korea as an only child. At the age of 16, he moved to Suwon. His family had difficult times in his youth.",
      profileImage: "https://wiki.d-addicts.com/images/7/7c/Nam_Joo-Hyuk-PR002.jpg",
      movies: [
        "Startup",
        "The Great Battle",
        "Josée",
        "Remember"
      ],
      experienceYears: "13 Years",
      isActive: true,
      address: {
        current: {
          city: "Seoul ",
          state: "Seoul Metropolitan City",
          country: "South Korea",
          zipcode: "04038"
        },
        permanent: {
          city: "Busan",
          state: "Busan Metropolitan City",
          country: "South Korea",
          zipcode: "02101"
        }
      },
      isAddressSame: false
    },
    {
      actorId: "ACT101",
      actorName: "Harrison Ford",
      profession: "Lead Actor",
      biography:
        "Harrison Ford (born July 13, 1942) is an American actor widely regarded as a cinematic cultural icon. Rising from a self-taught carpenter to one of Hollywood's biggest box-office draws.",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTjzsJRrKu5-jXZozPm7O0jevt9KaIlklmrAcJrBKY4J7R1ZYbdsPYJazFYGMfxiSCt_Zi1PLHCah0X76tYF3SL152dlCPsPfiR7_kt4W8XgUXFNFx-hjaNFZoY20lK1LnLf2GpG6PpvXr-&s=19",
      movies: [
        "The Call of the Wild",
        "Indiana Jones and the Dial of Destiny",
        "Blade Runner",
        "Star Wars: The Force Awakens"
      ],
      experienceYears: "15 Years",
      isActive: true,
      address: {
        current: {
          city: "Jackson",
          state: "Wyoming",
          country: "United States",
          zipcode: "83001"
        },
        permanent: {
          city: "Los Angeles",
          state: "California",
          country: "United States",
          zipcode: "90049"
        }
      },
      isAddressSame: false
    }
  ];

  setFirstActorSub$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  fetchActorsArr(): Observable<IActor[]> {
    return of(this.actorsArr);
  }

  getActorById(id: string): Observable<IActor> {
    let actor = this.actorsArr.find(a => a.actorId === id)!
    return of(actor);
  }

  removeActor(id: string): Observable<IActorResp<IActor>> {
    let getIndex = this.actorsArr.findIndex(a => a.actorId === id);
    let removedAcotr = this.actorsArr.splice(getIndex, 1);
    return of({
      msg: `The actor ${removedAcotr[0].actorName} with id ${removedAcotr[0].actorId} is removed successfully!!!`,
      data: removedAcotr[0]
    })
  }

  addActor(newActor: IActor): Observable<IActorResp<IActor>> {
    this.actorsArr.unshift(newActor);
    return of({
      msg: `The new Actor ${newActor.actorName} is added successfully!!!`,
      data: newActor
    })
  }

  updateActor(updatedActor: IActor): Observable<IActorResp<IActor>> {
    let getIndex = this.actorsArr.findIndex(a => a.actorId === updatedActor.actorId)
    this.actorsArr[getIndex] = updatedActor;
    return of({
      msg: `The actor ${updatedActor.actorName} with id ${updatedActor.actorId} is updated successfully!!!`,
      data: updatedActor
    })
  }
}
