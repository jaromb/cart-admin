import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {clearCookies} from './Logout'

class Header extends Component {

    state = {
        admin: null
      }
    
    
      async componentDidMount() {
        const admin = sessionStorage.getItem('admin');
     
        this.setState({admin: admin})
         
    }

    handleLogout = () => {
        sessionStorage.removeItem('admin')
        clearCookies()
        this.setState({
          admin: null
        })
        
      }
  
    render() {
      return (
        <div>
          <nav className = 'App-header' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: 160}}>
            <h1 style = {{fontSize: 45, fontWeight: 'bold'}}><Link style ={{textDecoration: 'none'}} to="/home">Stuff to Eat (Admin)</Link></h1>
            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', color: '#07AAFF', fontSize: 18}}>
                <li><Link style = {{textDecoration: 'none'}} to="/admin/inventory">Inventory</Link></li>
                <li><Link style = {{textDecoration: 'none'}} to="/admin/user-management">User Management</Link></li>                
                <li><Link style ={{textDecoration: 'none'}} to="/">Login</Link></li>                
                <li><Link onClick={this.handleLogout} style = {{textDecoration: 'none'}} to="/">Logout</Link></li>                
            </ul>
          </nav>   
        </div>
      )
    }
  }
  
  export default Header;
  