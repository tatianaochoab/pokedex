import React from 'react';
import Pokemon from './components/pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import { HashRouter, Switch, Route } from "react-router-dom";
import Informacion from './components/Informacion';
import Detalles from './components/Detalles';

function App() {
  return (
    <HashRouter> {/* envolvemos nuestra aplicación en el Router  */}
    <Switch> {/* también la envolvemos en el componente Switch */}
      <Route path="/" component={Pokemon} exact /> {/* y creamos nuestras rutas */}
      <Route path="/informacion" component={Informacion} exact />
      <Route path="/informacion/:informacionId" component={Detalles} exact />
    </Switch>
  </HashRouter>
  );
}

export default App;
