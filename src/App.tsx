import React from 'react';
import './App.css';
import store from './store/store'
import {Switch,Route} from 'react-router-dom'
import Index from './views/index' //首页
import AboutAuthor  from './views/aboutAuthor/aboutAuthor';
function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/AboutAuthor" component={AboutAuthor}></Route>
       </Switch>
    </div>
  );
}

export default App;
