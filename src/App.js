
import { Switch, Route } from 'react-router';
import './App.css';
import Body1 from './Body1';
import Body2 from './Body2';
import Footer from './Footer';
import Header from './Header';
import Gallery from './Gallery';

function App() {
  return (
  <div className="App">
    <Header />
    
    <Switch>
    <Route exact path = "/">
    <Body1 />
    <Body2 />
    <Footer />
    </Route>
    <Route exact path = "/gallery">
    <Gallery />
    </Route>
    </Switch>

  </div>
  );
}

export default App;
