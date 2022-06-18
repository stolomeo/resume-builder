import { createContext } from "react";
import { UserType } from "../types";
import { emptyResume } from "../utils";

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export const blankUser: UserType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  resume: emptyResume,
};

const UserContext = createContext<UserContextType>({
  user: blankUser,
  setUser: () => {},
});

export default UserContext;
