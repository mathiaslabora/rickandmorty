import { fCapitles, fPersonajes } from "../api/api";



const PERSONAJES = 'PERSONAJES'
const CAPITULOS = 'CAPITULOS'

const Personajes = (personajes)=>({type:PERSONAJES, payload: personajes});
const Capitulos = (capitulos)=>({type:CAPITULOS, payload: capitulos});


export const fetchPersonajes =()=>{

    return (disparch)=>{
        fPersonajes()
        .then(res=>{
            disparch(Personajes(res))
        })
        .catch(res=>{console.log(res)})
    }
}

export const fetchCapitulos =()=>{

    return (disparch)=>{
        fCapitles()
        .then(res=>{
            disparch(Capitulos(res))
        })
        .catch(res=>{console.log(res)})
    }
}

