# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: [https://github.com/Soaphub/room-layout]
- Live Site URL: [https://room-layout-nine.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

Learned to use UseEffect and change the css property of an element

```js
useEffect(()=>{
        const mobileView= window.matchMedia("(max-width: 992px)");
        if( mobileView.matches){
            setScreenSize(true);
        }
    },[])

    // using use Effect for adding margin for the slider button
    useEffect(()=>{
        const divElement= document.querySelector(".first-col img");
        const buttonDiv= document.querySelector(".button-div");
        const divSecond = document.querySelector(".prev-button");
        if(divElement){
            const heigth= divElement.offsetHeight;
            const minusHeigth= divSecond.offsetHeight;
            if(heigth>0){
                buttonDiv.style.marginTop = Number(heigth - minusHeigth)+"px";
            }
        }   
    },[screenSize])
```

## Author

- Website - [Ambadi](https://soaphub.github.io/Mysite/)
- Frontend Mentor - [@Soaphub](https://www.frontendmentor.io/profile/Soaphub)

## Acknowledgments

The udemdy coarse by Angela helped a lot in completing the project.
