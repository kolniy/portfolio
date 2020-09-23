import { v4 as uuidv4 } from "uuid"

const projectsData = [{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'DevConnector',
    text:'A Social Media Site for Developers, includes sign up and authenticate functionality, users can create posts and comment on posts, built with react, redux, node.js and mongoDB',
    github:'https://github.com/kolniy/devConnector',
    tags: ['html', 'css', 'javascript', 'firebase'],
    landingPage:'https://developers-hangout.herokuapp.com'
},
{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'Expensify',
    text:'Helps user to keep track of expenses. Built with react, redux and firebase, hosted on heroku.',
    github:'https://github.com/kolniy/expensify-app',
    tags: ['html', 'css', 'javascript', 'firebase'],
    landingPage:'https://olaniyi-expensify-app.herokuapp.com/'
},{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'MAYDAY',
    text:'Mayday Helps you find hospitals, Clinics and Pharmacies near you based on users search query, built with react and Google FireStore. leverages the google places API',
    github:'https://github.com/kolniy/Mayday',
    tags: ['html', 'css', 'javascript', 'firebase'],
    landingPage:'http://mayday-olaniyi.herokuapp.com/'
},{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'Chat App',
    text:'A multi-user chat app built node.js, Socket.IO and Mustache.js',
    github:'https://github.com/kolniy/Chat-App',
    tags: ['html', 'css', 'javascript', 'firebase'],
    landingPage:'http://olaniyi-chat-app.herokuapp.com/'
},{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'A Task Manger API',
    text:'Task manager helps authenticated users keep track of task. Built with Node.JS and MongoDB',
    github:'https://github.com/kolniy/task-manager-api',
    tags: ['html', 'css', 'javascript', 'firebase']
},{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'Hangman Game',
    text:'Try to play the guess game by guessing randomly generated word provided from an API. Hangman was built with Javascript(ES6) and webpack',
    github:'https://github.com/kolniy/Hangman-Game',
    tags: ['html', 'css', 'javascript', 'firebase'],
    landingPage:'https://olaniyi-hangman.netlify.app/'
},{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'Weather App',
    text:'Get Quick information or reports about the weather condition of any area. Built with Node.JS',
    github:'https://github.com/kolniy/node-weather-webserver',
    tags: ['html', 'css', 'javascript', 'firebase'],
    landingPage:'https://olaniyi-weather-app.herokuapp.com/'
},{
    id: uuidv4(),
    imgSrc:'../../img/hero1.jpg',
    title:'Notes App',
    text:'Take Note\'s and never forget. A Javascript Notes App. Stores notes with localstorage, users can sort notes based on the time created, edited or alphabetically.',
    github:'https://github.com/kolniy/Notes-App',
    tags: ['html', 'css', 'javascript', 'firebase'],
    landingPage:'https://olaniyi-notesapp.netlify.app/index.html'
}
]

export default projectsData