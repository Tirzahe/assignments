React Roto-Router
 React-router, React

Exercise
For this exercise you will be making a mock SPA (Single Page Application) for a plumbing company website.

Your website must contain a navbar, footer, and a main view section. Your navbar must contain at least 3 Link tags to at least 3 different views (for example Home, About, and Services).

The goal is to become proficient in using the three basic React-Router components: Link,Switch, and Route.

Make sure to npm install --save react-router-dom and wrap your App component inside BrowserRouter:
i.e.
ReactDOM.render(  
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById("root");
);
