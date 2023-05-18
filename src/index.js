import "./style.css";
import shopScreenshot from "/src/images/shop.png";
import memoryScreenshot from "/src/images/memory.png";
import weatherScreenshot from "/src/images/weather.png";
import todoScreenshot from "/src/images/todo.png";
import restaurantScreenshot from "/src/images/restaurant.png";
import sketchScreenshot from "/src/images/sketch.png";
import githubIcon from "/src/images/github.svg";
import previewIcon from "/src/images/preview.svg";

let projects = [
  {
    name: "Shopping cart",
    description:
      "This is my Shopping cart project made with React JS (The Odin Project, JavaScript path). The site also uses routing to navigate from home page to shop page.",
    screenshot: shopScreenshot,
    gitHubLink: "https://github.com/KarinaK17/shopping-cart",
    previewLink: "https://karinak17.github.io/shopping-cart",
  },
  {
    name: "Memory game",
    description:
      "This is my Memory game project using React (The Odin Project, JavaScript Path). You play this game by clicking on cards with pictures. After each click, the cards are shuffled. To win you need to click on all the cards, but you can't click on the same card twice.",
    screenshot: memoryScreenshot,
    gitHubLink: "https://github.com/KarinaK17/memory-game-react",
    previewLink: "https://karinak17.github.io/memory-game-react",
  },
  {
    name: "Weather app",
    description:
      "In this project I worked with APIs and asynchronous code. The page shows the weather in the city you type in the search box. You can specify your search using information from the hint (it appears when you hover over the word city). The header changes its color to match the temperature in the city, the page also shows appropriate gif image that describes the type of weather in the city. There is a toggle button to change temperature from Celsius to Fahrenheit.",
    screenshot: weatherScreenshot,
    gitHubLink: "https://github.com/KarinaK17/weather-app",
    previewLink: "https://karinak17.github.io/weather-app/",
  },
  {
    name: "Todo list",
    description:
      "This is my To-do List project. You can keep all your necessary appoitments and tasks here. The page also uses local storage, so all your task stay intact if you reload the page.",
    screenshot: todoScreenshot,
    gitHubLink: "https://github.com/KarinaK17/todo-list",
    previewLink: "https://karinak17.github.io/todo-list/",
  },
  {
    name: "Restaurant page",
    description:
      "My first project using webpack. This is a restaurant site that uses tabbed browsing to access the Home, Contact and Menu pages. This page is build using JavaScript DOM Manipulation and Events. ",
    screenshot: restaurantScreenshot,
    gitHubLink: "https://github.com/KarinaK17/restaurant-page",
    previewLink: "https://karinak17.github.io/restaurant-page/",
  },
  {
    name: "Etch-a-sketch",
    description:
      "A drawing app where you can draw a picture with pixels (user can choose the color of the pencil and number of pixels per side for the drawing board).",
    screenshot: sketchScreenshot,
    gitHubLink: "https://github.com/KarinaK17/etch-a-sketch",
    previewLink: "https://karinak17.github.io/etch-a-sketch/",
  },
];

const projectsList = document.querySelector("ul");

projects.forEach((project) => {
  const projectContainer = document.createElement("li");
  projectContainer.classList.add("project-container");

  const projectScreenshot = document.createElement("img");
  projectScreenshot.classList.add("project-screenshot");
  projectScreenshot.setAttribute("src", project.screenshot);

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");

  const projectNameAndLinks = document.createElement("div");
  projectNameAndLinks.classList.add("project-name-and-links");

  projectContainer.append(projectScreenshot, projectNameAndLinks);

  const projectName = document.createElement("p");
  projectName.classList.add("project-name");
  projectName.textContent = project.name;

  const projectLinks = document.createElement("div");
  projectLinks.classList.add("project-links");

  const projectGithub = document.createElement("a");
  projectGithub.classList.add("project-github");
  projectGithub.href = project.gitHubLink;
  const projectGithubImage = document.createElement("img");
  projectGithubImage.src = githubIcon;
  projectGithubImage.alt = "project's gitHub link";
  projectGithub.appendChild(projectGithubImage);

  const projectPreview = document.createElement("a");
  projectPreview.classList.add("project-preview");
  projectPreview.href = project.previewLink;
  const projectPreviewImage = document.createElement("img");
  projectPreviewImage.src = previewIcon;
  projectPreviewImage.alt = "project's live preview link";
  projectPreview.appendChild(projectPreviewImage);

  projectLinks.append(projectGithub, projectPreview);

  projectNameAndLinks.append(projectName, projectLinks);

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.description;

  projectInfo.append(projectNameAndLinks, projectDescription);

  projectContainer.append(projectScreenshot, projectInfo);

  projectsList.appendChild(projectContainer);
});
