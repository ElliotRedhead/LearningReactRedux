# FirstReact

## Purpose/Scope

A React / Redux solution to display PluralSight course content.  
An introductory project to learn the basics of React.js.

## Installation

### Getting Started

[Setup Instructions](https://create-react-app.dev/docs/getting-started/)

```console
npx create-react-app my-app
```

```console
cd my-app
yarn start
```

### Github Pages Deployment

[Github Pages Setup](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)  
_N.B. The functioning project relies on a local API (via JSON Server), the course list will not be loaded without a backend addition._

## Syntax

### Component Creation

There are four common ways of creating React components:

1. createClass
2. ES classs
3. Function - Preferred
4. Arrow function - Preferred

### Technical Approach

React uses a modular approach in the utilisation of components.  
Components are injected into the DOM by use of Javascript, exemplary files within this project that show this at its most basic level include:

- index.html
- index.js
- App.js
- PageNotFound.js

Studying the import/export logic between these files exhibits the core mechanism of React modularity.

## Redux

## Purpose

Redux is helpful for handling complex data flows, providing inter-component communication and handling of non-hierarchical data.  
The most obvious use-case for Redux is when using the same data in many places, Redux enables centralised storage.

### General Development

1. Start with state in single component.
2. Lift state as needed.
3. Utilise content or Redux if lifting state scaleability becomes a hindrance.
