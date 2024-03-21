// Api call
const URL = 'https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json';

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