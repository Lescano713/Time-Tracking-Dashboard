# Frontend Mentor - Time tracking dashboard solution

<div align="left">
  <a href="https://www.linkedin.com/in/danae-lescano-salvatierra" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"/>
  </a>
  <a href="https://lescano713.github.io/Time-Tracking-Dashboard/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Demo&label=&color=6A0DAD&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="demo badge"/>
  </a>
  <a href="https://www.frontendmentor.io/profile/Lescano713" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Frontend%20Mentor&label=&color=ff1538&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="FrontendMentor badge"/>
  </a>
</div>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot/desktop.gif)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- EventListeners
- JavaScript


### What I learned

<p>I learned about using media queries along with the property <b>grid-template-columns: repeat(auto-fit, minmax(13em, 1fr))</b> to ensure that the articles cover the entire container on screens larger than 550px. Additionally, I used the pseudo-selector <b>:not()</b> to apply styles while excluding a specific element.</p>


```css
  @media (min-width: 550px ) {
      main{
          grid-template-columns: repeat(auto-fit ,minmax(13em,1fr));
          max-width: 90%;
          width: 62em;}
      article:not(.articleUser){
              height: 13em;
              .timeframesDiv{
                  grid-template-columns: 1fr 0.3fr;
                  padding-bottom: 1em;
                  small{
                      grid-row: 3;
                      justify-self: self-start;
                  }
              }
          }
  }
```

<p>To retrieve JSON data, I used the <b>fetch API</b>. To streamline the code and enhance maintainability, I implemented several helper functions. These functions were designed to handle repetitive tasks and improve overall code efficiency.</p>

```js
fetch('data.json')
    .then(response => response.json())
    .then(data => showContent(data[0]));

function changeColor(target, options){
    target.style.color = "white";
    options.forEach(option =>{
        option.style.color = "hsl(236, 100%, 87%)";
    })
}
```



### Continued development

<p>- <strong>JavaScript Best Practices</strong>: Improving JavaScript code readability and performance by refactoring and leveraging ES6 features like template literals and destructuring.</p>
<p>- <strong>Integrating APIs</strong>: Fetching and displaying data from external APIs to create more dynamic and interactive web applications.</p>
<p>These areas will help me build more sophisticated, user-friendly, and performant web applications.</p>


