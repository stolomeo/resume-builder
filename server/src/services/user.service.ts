import { getDb } from "../gateway/mongo";

type User = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

export const getUserCollection = async () => {
  const db = await getDb();
  return db.collection("users");
};

export const createUser = async (user: User) => {
  const col = await getUserCollection();
  const { insertedId } = await col.insertOne(user);
  return insertedId.toString();
};
