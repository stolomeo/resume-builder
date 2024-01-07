import { getDb } from "../gateway/mongo";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export const getUserCollection = async () => {
  const db = await getDb();
  return db.collection("users");
};

export const createUser = async (user: User) => {
  const usersCollection = await getUserCollection();
  const filter = { email: user.email };
  const options = { upsert: true };
  const updateDoc = {
    $set: user,
  };
  usersCollection.updateOne(filter, updateDoc, options);
};

export const getUser = async (email: string) => {
  const usersCollection = await getUserCollection();
  const user: any = await usersCollection.findOne({
    email: email,
  });
  return user;
};
