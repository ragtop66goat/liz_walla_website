import { atom, selector } from "recoil";
import { IFormData, IFormDataErrors } from "../types";

export const formErrorState = atom<IFormDataErrors>({
  key: "formErrorState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const formDataState = atom<IFormData>({
  key: "formDataState",
  default: {
    name: "",
    email: "",
    message: ""
  }
})

export const errorCountState = selector({
  key: "errorCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const errors = get(formErrorState);
    return Object.keys(errors).length;
  },
});
