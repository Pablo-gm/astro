import { type APIArt, type Datum } from '../types/api';

export const getLatestPieces = async () => {
    const res = await fetch('https://api.artic.edu/api/v1/artworks',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            page: 1,
            limit: 3
        })
    });
    const { data } = await res.json() as APIArt;
    return data
}

export const getExamples = async () => {
    const res = await fetch('https://api.artic.edu/api/v1/artworks?ids=27992,28560,258488');
    const { data } = await res.json() as APIArt;
    return data
}

export const getPieceByID = async ({id}: {id: string | undefined}) => {
    let result;

    if(id){
        const res = await fetch('https://api.artic.edu/api/v1/artworks/' + id);
        const{ data } = await res.json() as Datum;
        result = data;
    }

    return result
}