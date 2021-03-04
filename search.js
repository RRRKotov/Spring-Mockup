let data = [
  {
    img: "images/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
    title: "Spring Boot",
    content:
      "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
  },
  {
    img: "images/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg",
    title: "Spring Framework",
    content:
      "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
  },
  {
    img: "images/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg",
    title: "Spring Data",
    content:
      "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
  },
  {
    img: "images/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg",
    title: "Spring Cloud",
    content:
      " Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    img: "images/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg",
    title: "Spring Cloud Data Flow",
    content:
      "Provides an orchestration service for composable data microservice applications on modern runtimes.",
  },
  {
    img: "images/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg",
    title: "Spring Security",
    content:
      "Protects your application with comprehensive and extensible authentication and authorization support.",
  },
];

let input = document.querySelector(".input");
input.addEventListener("input", inputChange);

let container__item = document.createElement("div");
container__item.classList.add("container__item");

let container__body = document.createElement("div");
container__body.classList.add("container__body");
container__item.appendChild(container__body);

let img = document.createElement("img");
container__body.appendChild(img);

let h3 = document.createElement("h3");
container__body.appendChild(h3);

let container__name = document.createElement("div");
container__name.classList.add("container__name");
h3.appendChild(container__name);

let container__text = document.createElement("div");
container__text.classList.add("container__text");
container__body.appendChild(container__text);

let container__main = document.querySelector(".container__main");

let noResults = document.createElement("div");
noResults.classList.add("container__noresults");
noResults.innerHTML = "No results(( Try again!";

function inputChange(e) {
  container__main.innerHTML = "";

  let newData = data.filter((item) => {
    return (
      item.content.toUpperCase().includes(e.target.value.toUpperCase()) ||
      item.title.toUpperCase().includes(e.target.value.toUpperCase())
    );
  });
  if (newData.length == 0) {
    container__main.appendChild(noResults);
  } else {
    newData.forEach((item) => {
      img.setAttribute("src", item.img);
      container__name.innerHTML = item.title;
      container__text.innerHTML = item.content;
      container__main.appendChild(container__item.cloneNode(true));
    });
  }
}
