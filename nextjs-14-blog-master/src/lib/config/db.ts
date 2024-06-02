import mongoose from "mongoose";

interface ConnectionType{
    isConnected:number;
}
const connection:ConnectionType={
    isConnected:0
};
export const ConnectToDb=async ()=>{
    try {
        if(connection.isConnected) return;
        const db=await mongoose.connect(process.env.URI||'');
        connection.isConnected=db.connections[0].readyState;
    } catch (error) {
        console.log(error);
    }
}