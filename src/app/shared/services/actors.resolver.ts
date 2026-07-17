import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { IActor } from "../models/actor";
import { Observable } from "rxjs";
import { ActorsService } from "./actors.service";


@Injectable({
    providedIn: 'root'
})
export class ActorsResolver implements Resolve<IActor | Array<IActor>> {

    private _actorService = inject(ActorsService)

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IActor | IActor[] | Observable<IActor | IActor[]> | Promise<IActor | IActor[]> {
        let actorId = route.paramMap.get('actorID');
        if (actorId) {
            return this._actorService.getActorById(actorId);
        } else {
            return this._actorService.fetchActorsArr();
        }
    }
}