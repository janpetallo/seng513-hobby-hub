# seng513-202401-group-19


## Dependencies
The following packages and dependencies are being used:
1. Vite
2. React BootStrap
3. React Router Dom
4. sass/scss
5. react-responsive
6. formik
7. yup

## Getting started
1. cd client
2. npm install
3. npm run dev
4. Go to the login page if the login button is not purple then the custom bootstrap colors are not working run the
   command:

   `npm add -D sass`

## Customizing Bootstrap 
1. I have created a custom theme and changed the font family to Roboto. If you want to change any of bootstraps
   defaults you can under the sass folder there is a main.scss you can add the custom code there. Please be careful
   if you change padding or margins because it could break all bootstrap.
2. Note: that our theme is called HHPurple (short for HobbyHub Purple) and can be used like any other bootstrap utility
```
<Button className="btn-lg mb-2 w-75" variant="HHPurple" type="submit">
   Login
</Button>
```

## WARNING 
I changed the default link color for mobile to be white (because they are white on the login and signup pages).
If the link seems to be missing on mobile (when you use a white background) that might be why
try changing the link color.