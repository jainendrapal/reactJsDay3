/* eslint-disable react/prop-types */
import React,{Component} from 'react';
import { Route, Router,hashHistory,Link,IndexRoute } from 'react-router';
import axios from 'axios';

class App2 extends Component {

    constructor(props) {
        super(props);
        this.state={
            persons:[]
        };
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const persons=res.data
            this.setState({persons})
            console.log(persons)
        })
        
        
    }
    render () {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            {/* <Route path='/address' component={Address} /> */}
            <Route path='/address' component={Address}>
                <IndexRoute component={PerAddress}/>
                <Route path='tempadd' component={TempAdderss} />
            </Route>
            <Route path='/users(/:name)' component={() => <Users data={this.state} />}></Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      )
    }
  }
  
// const Users=(props)=><div>
//     <h1>Users Component</h1>
//     <h1>{props.params.name}</h1>
     
//     <ul>
//                 {this.state.persons.map((person,i)=><li key={i}>{person.name}</li>)}
//                 {this.state.persons.map((result, i) => (
//                  <li key={i}>{result.name}</li>
//              ))}
//            </ul>

// </div>
const Users = ({ data }) => {
    // return (
    //   <h3>{JSON.stringify(data.persons)}</h3>
    // );
    return (
    <div>
    <ul>
         {data.persons.map((person,i)=><li key={i}>{person.name}</li>)}
                {data.persons.map((result, i) => (
                 <li key={i}>{result.name}</li>
             ))}
           </ul>
           </div>
    )
  };



const PerAddress=()=>(<div>Pune wakad</div>)
const TempAdderss=()=><div>Mumbai Bandra</div>

const Nav = () => (
    <div>
      <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>
      <Link activeStyle={{color:'#53acff'}} to='/users'>Users</Link>
    </div>
  )

const Container = (props) => <div>

  <Nav />
  {props.children}
</div>

const Home=()=> <h1>Home Component</h1>
// const Address=()=> <h1>Address Component</h1>

const Address=(props)=><div>
    <br/>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/address'>Permanent Address </Link> &nbsp; &nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/address/tempadd'>Temporary Address</Link>
    {props.children}
</div>

const NotFound=()=> <h1>404 Not Found</h1>
export default App2;
