import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import renderRoutes from './utils/renderRoutes';
import routes from './router';
import "./App.css";

function App() {
  return (
      <Router>
        <Switch>
          { renderRoutes(routes) }
        </Switch>
      </Router>
  );
}

export default App;
