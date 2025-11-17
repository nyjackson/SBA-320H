# Skill Based Assessment for Module 320H: React Web Application

A React + Vite application for looking at cat or dog pictures, generating a random dog or cat picture, and favoriting pictures to appreciate later. 

## Resources:
- https://coolors.co/556b2f-f2eedb-e08e45
- https://api.thecatapi.com/
- https://api.thedogapi.com/
- https://fonts.google.com/ 

## Access Live Site

This project is live on Netlify: [chat-ou-chien.netlify.app](https://chat-ou-chien.netlify.app/)

## Installation via Github

Pre-Requisites:
- Node.js
- npm

1. Clone this repo
2. Install dependencies: `npm install`
3. Type in your terminal, within the repo folder: `npm run dev`
4. Open a browser and go to : http://localhost:5173 and interact!

## /components
Contains all the React components used to craft the application. 

### AllCats.jsx
- Lists all cats with pagination. 

### AllDogs.jsx
- Lists all dogs with pagination. 

### Favorites.jsx
- Lists all favorited dogs and cats then renders them and showcases information about them. 

### Home.jsx
- Serves as the homepage with a brief introduction to the program. 

## Navbar.jsx
- Navigation bar powered by React Router. 

## Animal.jsx
- Animal component, used for all animal rendering. 

## Random.jsx
- Displays one random cat or dog from the collection. 

## React Hooks Utilized:
- useState, useEffect, useReducer

## Known Issues

- Not all photos have breed information.


