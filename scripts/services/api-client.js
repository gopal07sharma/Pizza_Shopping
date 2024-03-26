// Api call
const URL = 'https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json';

const makeNetworkCalls = async ()=>{
       try{
       const response = await fetch(URL);
       const obj = await response.json()
       return obj;
    } 
    catch(err){
         throw err;
    }
}
export default makeNetworkCalls;