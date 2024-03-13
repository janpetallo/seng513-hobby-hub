import * as yup from "yup";

const oneUpper = /(?=.*[A-Z])/;
const oneLower = /(?=.*[a-z])/;
const oneDigit = /(?=.*\d)/;
const oneSymbol = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=/"'])/;

export const SignupSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, "Username must be 4 or more characters")
        .required("Please fill out this field"),

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Please fill out this field"),

    password: yup
        .string()
        .min(4, "Password must be 4 or more characters")
        .matches(oneUpper, {message: "Password should contain at least one uppercase letter"})
        .matches(oneLower, {message: "Password should contain at least one lowercase letter"})
        .matches(oneDigit, {message: "Password should contain at least one digit"})
        .matches(oneSymbol, {message: "Password should contain at least one special character"})
        .required("Please fill out this field"),

    confirmPassword: yup
        .string()
        .required('Please fill out this field')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),

    birthdate: yup
        .date()
        .max(new Date(new Date().getFullYear() - 12, new Date().getMonth(), new Date().getDate()), "Website's age restriction is 12")
        .required('Please fill out this field'),
})
