import { Breed } from "../../types"

interface BreedProps extends Breed {
    name: string;
}

export const apiconfig = async (query: string) => {
    const data = await fetch(`https://api.thecatapi.com/v1${query}`)
    return data.json()
}
