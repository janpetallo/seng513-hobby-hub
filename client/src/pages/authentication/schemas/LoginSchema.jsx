import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    username: yup
        .string()
        .required("Please fill out this field"),

    password: yup
        .string()
        .required("Please fill out this field"),
})
