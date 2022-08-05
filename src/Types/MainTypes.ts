import { UseFormRegister } from "react-hook-form";

export interface GeneralProps{
    register: UseFormRegister<IFormData>,
  label?: string,
  rules: {
    name: "password"|"login"|"rememberMe",
    validation: {}
  },
  errors?: any,
}

export interface IFormData {
    password: string,
    login: string,
    rememberMe: string
}