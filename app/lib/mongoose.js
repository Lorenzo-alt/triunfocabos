import mongoose, { Mongoose } from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function mongooseConnect() {
  try {
    if (global.mongoose && global.mongoose.conn) {
      console.log("Connected from previous");
      return global.mongoose.conn;
    } else {
      const conString = 'mongodb+srv://vercel-admin-user:wYTpv29pc8VSiTMp@db-triunfocabos.fp4ftis.mongodb.net/db-triunfocabos?retryWrites=true&w=majority&appName=db-triunfocabos';

      const promise = mongoose.connect(conString, {
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };

      console.log("Newly connected");
      return await promise;
    }
  } catch (error) {
    console.error("teste Error connecting to the database:", error);
    throw new Error("Database connection failed teste");
  }
}

export const disconnect = () => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};