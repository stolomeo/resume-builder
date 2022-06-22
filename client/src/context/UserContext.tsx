import { createContext } from "react";
import { UserType } from "../types";
import { _emptyDevResume } from "../utils/emptyDevResume";

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export const blankUser: UserType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  resume: _emptyDevResume,
};

const UserContext = createContext<UserContextType>({
  user: blankUser,
  setUser: () => {},
});

export default UserContext;
