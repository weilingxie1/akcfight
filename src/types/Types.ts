export interface Fight {
    id: number,
    team1:{
        name: string,
        color:string
    },
    team2:{
        name: string,
        color:string
    },
    suburi:string,
    kihon:string,
    kata:string  
}

export interface Score {
    name:string,
    score:number
}