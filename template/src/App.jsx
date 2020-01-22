import React from "react";
import "./index.css";
import AppStyles from "./AppStyles.styles.tw";

const App = () => {
  return (
    <AppStyles>
      <h1>Greetings Earthling</h1>
      <p>
        Welcome to your Create-React-App / TailwindCSS / Styled Components
        template
      </p>
      <h2>Resources / Documentation</h2>
      <ul>
        <li>
          <a href="https://reactjs.org/docs/create-a-new-react-app.html">
            ReactJS
          </a>
        </li>
        <li>
          <a href="https://tailwindcss.com/">TailwindCSS</a>
        </li>
        <li>
          <a href="https://styled-components.com/">Styled Components</a>
        </li>
      </ul>
    </AppStyles>
  );
};

export default App;
