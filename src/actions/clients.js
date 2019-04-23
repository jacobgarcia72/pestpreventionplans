
import { database } from '../Firebase';


export const createNewClient = async (client, callback)=> {
  try {
    let id;
    while(true) {
      id="";
      for (let i = 0; i<6; i++) {
        id += Math.floor(Math.random()*10);
      }
      let client;
      await database.ref(`clients/${id}`).once('value', async data=>{
        client = await data.toJSON();
      });
      if (!client) break; //ensure id is not already taken
    }
    client.id = id;
    client.balance = 0;
    client.lifetimeRevenue = 0;
    await database.ref(`clients/${id}`).set(client);
    callback(client);
  } catch {
    return false;
  }
}
