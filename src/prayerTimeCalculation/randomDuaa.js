import {duaas} from './duaa.js'



function getRandomDuaa(){
    const rundomNumber = Math.floor(Math.random()*30);
    return duaas[rundomNumber];
}

export default getRandomDuaa();