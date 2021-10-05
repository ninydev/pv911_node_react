import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import './App.css';

import NovaPoshta from "./componets/NovaPoshta";
import Home from "./componets/static/pages/Home";
import Error404 from "./componets/static/errors/Error404";
import Header from "./componets/layout/header";
import Footer from "./componets/layout/footer";
import BoardList from "./componets/trello/boardList";
import NpContainer from "./componets/novaposhta/npContainer";



function App() {
  return (
      <Router>
          <Header />
          <main>
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route exact path="/trello">
                      <BoardList />
                  </Route>
                  <Route path="/np">
                      <NpContainer />
                  </Route>
                  <Route path="*">
                      <Error404 />
                  </Route>
              </Switch>
          </main>
        <Footer />
      </Router>

  );
}

export default App;
