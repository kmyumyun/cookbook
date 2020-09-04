import LocalizationStrings from "react-localization";

let loc = new LocalizationStrings({
  en: {
    //ui
    username: "Username",
    password: "Password",
    email: "Email",
    repassword: "Repeat Password",
    firstname: "First Name",
    lastname: "Last Name",
    signin: "Sign In",
    signup: "Sign Up",
    loginpage: "Login",
    registerpage: "Register",
    home: "Home",
    recipes: "Recipes",
    //validation
    required: "{0} is required!",
    rePassword: "Please make sure passwords match!",
    minLength: "{0} must be at least {1} characters long!",
    maxLength: "{0} must be at most {1} characters long!",
    min: "{0} must be bigger than {1}!",
    max: "{0} must be lower than {1}!",
  },
  bg: {
    //ui
    username: "Потребител",
    password: "Парола",
    email: "Имейл",
    repassword: "Потвърди парола",
    firstname: "Име",
    lastname: "Фамилия",
    signin: "Влез",
    signup: "Запази",
    loginpage: "Вход",
    registerpage: "Регистрация",
    home: "Начало",
    recipes: "Рецепти",
    //validation
    required: "Полето {0} е задължително!",
    rePassword: "Моля, уверете се, че паролите съвпадат!",
    minLength: "Полето {0} трябва да е с минимална дължина от {1} символа!",
    maxLength: "Полето {0} трябва да е с максимална дължина от {1} символа!",
    min: "Полето {0} трябва да е със стойност по-голяма от {1}!",
    max: "Полето {0} трябва да е със стойност по-малка от {1}!",
  },
});

export default loc;
