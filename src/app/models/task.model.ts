export interface Task{
    id:number
    name: string
    duration: number
    personsIds:number[]
    clock?:Clock
}

interface Clock{
    hours?:number
    minutes?:number
    seconds?:number
    time:string
}