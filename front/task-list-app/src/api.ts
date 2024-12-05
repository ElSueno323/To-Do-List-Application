import axios from "axios";


const urlApi='http://localhost:3000';

interface Task{
    id?:number;
    title:string;
    description:string;
    status:string;
    dueTime:string;
}


async function getAllTasks(){
    try{
        const reponse = await axios.get(`${urlApi}/tasks`);
        return reponse.data;
    }catch(error){
        console.log(error);
    }
}

async function createTask(task:Task){
    try{
        await axios.post(`${urlApi}/tasks`,task);
    }catch(error){
        console.log(error);
    }
}

export {getAllTasks, createTask};