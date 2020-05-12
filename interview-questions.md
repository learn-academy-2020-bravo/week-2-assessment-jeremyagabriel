# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: The method super() is used within the constructor method of a child class to inherit the the information of the parent class.

  Researched answer: The super keyword is used to access and call functions on an object's parent.



2. What is a virtual DOM?

  Your answer: A virtual DOM is kind of like a temporary DOM between the actual DOM and the user interface, where the UI only changes the components, from the actual DOM, that were interacted with. This way an entire application doesn't have to refresh in order to see one change appear on screen.

  Researched answer: The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. For example, You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: You will need to import React and its Component from 'react', then create the Class App and extend the component from React; within there you use the render() method to return a singular div. Within that div can contain all your other HTML tags, such as <h1>Hello World!</h1>. You will also need to export default App.

  Researched answer:
  ** import React from 'react';
  ** class ExampleClass extends React.Component
  ** export default ExampleClass (below the Class)
  ** constructor(props)
  ** super(props)
  ** render() & return()


4. What is JSX?

  Your answer: JSX is the file type of a React javascript file in which both JS and HTML can coexist

  Researched answer: JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code



5. What is state in React?

  Your answer: A React state is a temporary property brought on either through user input or action, and can then be utilized in different ways in the component without the need of refreshing.

  Researched answer: React components have a built-in state object. The state object is where you store property values that belongs to the component. Then the state object changes, the component re-renders.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is when you "hoist" something in Javascript :)

  Researched answer: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods: Through lifecycle methods, we can then control what happens when each tiny section of your UI renders, updates, thinks about re-rendering, and then disappears entirely.
- API: a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service
- event.preventDefault(): The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
- DOM events: HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document
- http verbs: The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently.
- MVC: Model–view–controller is a software design pattern[1] commonly used for developing user interfaces which divides the related program logic into three interconnected elements.
