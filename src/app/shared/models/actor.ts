export interface IActor {
    actorId: string;
    actorName: string;
    profession: string;
    biography: string;
    profileImage: string;
    movies: string[];
    experienceYears: string;
    isActive: boolean;
    address: IAddress;
    isAddressSame: boolean;
}
export interface IAddress {
    current: ILocation;
    permanent: ILocation;
}
export interface ILocation {
    city: string;
    state: string;
    country: string;
    zipcode: string;
}

export interface IActorResp<T>{
    msg: string,
    data: T
}