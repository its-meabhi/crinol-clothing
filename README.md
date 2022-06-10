# Crinol Clothing

## E - Commerce Platform

An E-Commerce Platform Built using ReactJS and Firebase

# Tech Stack Used in Development

<p align='center' float="left">
  <a href="https://reactjs.org/" style="text-decoration : none">
  <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="100" height='130' />
   </a>
   <a href="https://redux.js.org/" style="text-decoration : none">
  <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" width="120" height='130' />
  </a>
  <a href="https://firebase.google.com/" style="text-decoration : none">
  <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" width="80" height='130' />
  </a>
  <a href="https://github.com" style="text-decoration : none">
   <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" width="150" height='130' /> 
   </a>
  <a href="https://stripe.com" style="text-decoration : none">
   <img style="object-fit:cover" src="https://stripe.com/img/v3/newsroom/social.png" width="150" height='130' /> 
   </a>
</p>

# Features

* Sign in, Sign up
* Add to Cart
* Payment Method
* Dynamic Routes For Each Category
* Redux for State Management

# Run Website Locally

Clone the repositry

Install dependencies. Make sure you have `nodejs` already installed in your system
```shell 
npm install || yarn install
```
Create new `.env.local` file and Setup your Firebase API's in it ( [Visit FireBase](https://firebase.google.com) )
```shell
REACT_APP_GOOGLE_API_KEY
REACT_APP_AUTH_DOMAIN
REACT_APP_PROJECT_ID
REACT_APP_STORAGE_BUCKET
REACT_APP_MESSAGE_SEND_ID
REACT_APP_APP_ID
REACT_APP_MEASUREMENT_ID
```
Add Your Stripe Public Key in `.env.local` file ( [Visit Stripe](https://stripe.com) )
```shell
REACT_APP_STRIPE_PUBLIC_KEY
REACT_APP_STRIPE_ICON
```
After installing Dependencies and adding API's in `.env.local` file start the Website using
```shell
npm start || yarn start
```
If you follow every step correctly you will see website running at port 3000

If you like my work do give a star to repo
