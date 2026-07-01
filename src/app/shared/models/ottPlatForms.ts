export interface IottPlatform {
    ottId: string;
    platformName: string;
    subscriptionType: string;
    monthlyPrice: number;
    totalMovies: number;
    availableInIndia: boolean;
    foundedYear: number;
    description: string;
    platformLogo: string;
}
export interface IottPlatformResp<T>{
    msg: string;
    data: T
}