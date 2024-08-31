import * as Yup from "yup";

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

export interface IFormDataErrors {
    name?: string;
    email?: string;
}

export interface IRightTextLeftImageProps {
  mainBackgroundColor: string;
  text: string;
  imagePath: string;
  textColor: string;
}

export interface ILeftTextRightImageSection {
  mainBackgroundColor: string;
  text: string;
  imagePath: string;
  textColor: string;
}

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Please enter a valid email address'),
  message: Yup.string()

})
