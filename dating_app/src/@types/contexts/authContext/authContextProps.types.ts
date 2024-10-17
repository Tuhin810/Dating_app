import { IResort } from "../../interface/resort.interface";

export type AuthContextProps = {
  user: IResort | null;
  setUser: (user: IResort) => void;
};
