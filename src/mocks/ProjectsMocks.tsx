//Image Projects
import p_quimikal from "../assets/imgProjects/p_quimikal.jpg";
import p_discounts from "../assets/imgProjects/p_discountscitys.jpg";
import p_bimcapacitacion from "../assets/imgProjects/p_bimcapacitacion.jpg";
import p_sampleForm from "../assets/imgProjects/p_sample_form.jpg";
import p_sampleOffice from "../assets/imgProjects/p_office_registration.png";
import p_agnesDonation from "../assets/imgProjects/p_casa_hogar.jpg";
import p_budgetApp from "../assets/imgProjects/p_budget_app.png";
import p_tiktaktoe from "../assets/imgProjects/p_tic_tac_toe.png";
import p_wheatherApp from "../assets/imgProjects/p_weather_app.jpg";
import p_presentation from "../assets/imgProjects/p_presentation.jpg";
import p_apiMovies from "../assets/imgProjects/p_apimovies.jpg";
import p_searchGif from "../assets/imgProjects/p_SearchGif.jpg";
import p_lewallet from "../assets/imgProjects/p_lewallet.png";

import django from '../assets/Logos_tech/django-logo-240.png'
import javascript from '../assets/Logos_tech/javascript-logo-240.png'
import cafe from '../assets/Logos_tech/coffee-bean-solid-240.png'
import html5 from '../assets/Logos_tech/html5-logo-240.png'
import email from '../assets/Logos_tech/mail-send-regular-240.png'
import stripe from '../assets/Logos_tech/stripe-logo-240.png'
import css3 from '../assets/Logos_tech/css3-logo-240.png'
import sass from '../assets/Logos_tech/sass-logo-240.png'
import git from '../assets/Logos_tech/git-logo-240.png'
import react from '../assets/Logos_tech/react-logo-240.png'
import github from '../assets/Logos_tech/github-logo-240.png'
import postgresql from '../assets/Logos_tech/postgresql-logo-240.png'
import nextjs from '../assets/Logos_tech/next-js.256x256.png'
import postman from '../assets/Logos_tech/postman.256x256.png'
import paypal from '../assets/Logos_tech/paypal-logo-240.png'
import typescript from '../assets/Logos_tech/typescript-logo-240.png'
import figma from '../assets/Logos_tech/figma-logo-240.png'
import astrojs from '../assets/Logos_tech/astro-light.svg'

const projects = [
  {
    id: 'a',
    type: "profesional",
    title: "Le-Wallet",
    url: "https://le-wallet.vercel.app/",
    stack: [
      { name:'React' ,icon:react },
      { name:'Sass' ,icon:sass },
      { name:'Next' ,icon:nextjs },
      { name:'GitHub', icon: github },
    ],
    imgProject: p_lewallet,
    language: "English / Ingles",
  },
  {
    id: 1,
    type: "profesional",
    title: "Quimikal Academy",
    url: "https://quimikal.com/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'React', icon: react },
    ],
    imgProject: p_quimikal,
    language: "Español / Spanish",
  },
  {
    id: 2,
    type: "profesional",
    title: "BIMCapacitacion",
    url: "https://bimcapacitacion.com/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'Django' ,icon:django },
    ],
    imgProject: p_bimcapacitacion,
    language: "Español / Spanish",
  },
  {
    id: 3,
    type: "profesional",
    title: "Discounts Citys",
    url: "https://github.com/juliosantacruz/discounts-live",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'Django' ,icon:django },
    ],
    imgProject: p_discounts,
    language: "Ingles / English",
  },
  {
    id: 4,
    type: "profesional",
    title: "Responsive Contact Form",
    url: "https://juliosantacruz.dev/sample_form/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
    ],
    imgProject: p_sampleForm,
    language: "Spanish / Español",
  },
  {
    id: 5,
    type: "profesional",
    title: "Office Register",
    url: "https://github.com/juliosantacruz/coworking",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'Django' ,icon:django },
    ],
    imgProject: p_sampleOffice,
    language: "Spanish / Español",
  },
  {
    id: 6,
    type: "profesional",
    title: "Agnes Donation Web",
    url: "https://github.com/juliosantacruz/casahogar",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'Django' ,icon:django },
    ],
    imgProject: p_agnesDonation,
    language: "Spanish / Español",
  },
  {
    id: 7,
    type: "react",
    title: "Budget App",
    url: "https://juliosantacruz.github.io/react-budget-app/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'React', icon: react },
    ],
    imgProject: p_budgetApp,
    language: "English / Ingles",
  },
  {
    id: 8,
    type: "react",
    title: "Tic Tac Toe App",
    url: "https://juliosantacruz.github.io/TicTacToe/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'React', icon: react },
    ],
    imgProject: p_tiktaktoe,
    language: "English / Ingles",
  },
  {
    id: 9,
    type: "react",
    title: "Wheater App",
    url: "https://juliosantacruz.github.io/weather-page/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'React', icon: react },
    ],
    imgProject: p_wheatherApp,
    language: "English / Ingles",
  },
  {
    id: 10,
    type: "react",
    title: "Search GIF! App",
    url: "https://juliosantacruz.github.io/search_Gif/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'React', icon: react },
    ],
    imgProject: p_searchGif,
    language: "Spanish / Español",
  },
  {
    id: 11,
    type: "react",
    title: "API Movies",
    url: "https://juliosantacruz.github.io/api-movies/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'React', icon: react },
    ],
    imgProject: p_apiMovies,
    language: "Spanish / Español",
  },
  {
    id: 12,
    type: "react",
    title: "Presentation Page",
    url: "https://juliosantacruz.github.io/react-fetch-exercise/",
    stack: [
      { name:'HTML' ,icon:html5 },
      { name:'CSS' ,icon:css3 },
      { name:'JS' ,icon:javascript },
      { name:'React', icon: react },
    ],
    imgProject: p_presentation,
    language: "Spanish / Español",
  },
];

export default projects;
