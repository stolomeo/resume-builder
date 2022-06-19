import { createContext } from "react";
import { UserType } from "../types";
import emptyDevResume from "../utils/emptyDevResume";

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export const blankUser: UserType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  resume: emptyDevResume,
};

const UserContext = createContext<UserContextType>({
  user: blankUser,
  setUser: () => {},
});

export default UserContext;
