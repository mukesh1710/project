import React,{Component} from 'react';
import './App.css';
import Aux from './hoc/aux1';
import TopMenu from './components/Screen/TopMenu';
import SideBar from './components/Screen/SideBar';
class App extends Component{
  render(){
    return (
      <Aux>
          <TopMenu >
                Welcome to React Js Application.
          </TopMenu>
            <SideBar>
                  <ul>
                    <li> Link 1 </li>
                    <li> Link 1 </li>
                    <li> Link 1 </li>
                    <li> Link 1 </li>
                    <li> Link 1 </li>
                    
                  </ul>
            </SideBar>
      </Aux>
    );    
  }
}

export default App;
