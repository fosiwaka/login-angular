export interface Caracter {
    created: string;
    episode: Array<string>;
    gender: string;
    id: number;
    image: string;
    location: LocationOrigin;
    name: string; 
    origin: LocationOrigin
    species: string; 
    status: string; 
    type: string;
    url: string;
}

export interface LocationOrigin {
    name: string;
    url: string;
}