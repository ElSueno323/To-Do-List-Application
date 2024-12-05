import axios from "axios";


const urlApi='http://localhost:3000';

async function getAllTasks(){
    try{
        const reponse = await axios.get(`${urlApi}/tasks`);
        return reponse.data;
    }catch(error){
        console.log(error);
    }
}


export {getAllTasks};