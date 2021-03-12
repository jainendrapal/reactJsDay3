import React from 'react';
import  {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Topics from './Components/Topics.jsx'
class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <h2>React Router Example</h2>
                    <nav>
                        <ul>
                            <li><Link to={"/"}>HOME</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/topics"}>Topics</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/topics" component={Topics} />
                            <Route exact path="/contact" component={Contact} />
                    </Switch>
                </div>
            </Router>
          )
    }

}

export default App;
