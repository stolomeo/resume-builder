import { createContext } from "react";
import { UserType } from "../types/user.type";
import { _blankResume } from "../utils/blankResume";

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export const blankUser: UserType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  resume: _blankResume,
};

const UserContext = createContext<UserContextType>({
  user: blankUser,
  setUser: () => {},
});

export default UserContext;
