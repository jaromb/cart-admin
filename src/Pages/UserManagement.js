import React, { Component } from 'react';
// import '/Users/jarombridges/Helio/Cart/cart/src/App.css'
import {getUsers} from '../Components/GetItems'
import {Link} from 'react-router-dom'

class UserManagement extends Component {
  state = {
    userList: [],
    username: '',
    email: '',
    password: '',
    newItem: {},
    updatedUsername: '',
    updatedEmail: '',
    updatedPassword: '',
    updateID: '',
    modifyButtonClicked: false,
    user: null,
    error: null
  }

  async componentDidMount() {
    try{
        const users = await getUsers();
       this.setState({
            user: sessionStorage.getItem('user'),
            userList: users
        }) 
        console.log(this.state.users)
    }
    catch {
        this.setState({
            error: 'USER NOT AUTHORIZED'
        })
        
    }

 }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  addUserToList = () => new Promise((resolve,reject) => {
    const newObject = {username: this.state.username,
    email: this.state.email,
    password: this.state.password}

    if(this.state.name !== '' && this.state.price !== '' && this.state.url !== '') {
    fetch("https://git.heroku.com/my-helio-cart-api.git/admin/user-management", {
        method: "POST",
        credentials: 'include',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(newObject)
    })
    .then(users => {
        resolve(users.json())
    }).catch(reject)
}
    else {
        alert('Did you complete all information fields?')
    }
})

  addUser = () => () => {
      this.addUserToList()
      .then(userList => 
          this.setState({
              userList: userList
          }))
        .then(
            this.clearInputs
        )   
  }

  clearInputs = () => {
      this.refs.username.value = '';
      this.refs.email.value = '';
      this.refs.password.value = ''
  }

  clearUpdateInputs = () => {
      this.refs.updateUsername.value = '';
      this.refs.updateEmail.value = '';
      this.refs.updatePassword.value = ''
  }


handleAddTextClick = () => {
    this.setState({
        modifyButtonClicked: false
    })
}

handleModifyClick = (user) => () => {
    this.setState({
        modifyButtonClicked: true,
        updatedUsername: user.username,
        updatedEmail: user.email,
        updatedPassword: user.password,
        updateID: user._id
    })
}


modifyUserInfo = () => new Promise((resolve,reject) => {
    const modifiedObject = {username: this.state.updatedUsername, 
        email: this.state.updatedEmail,
        password: this.state.updatedPassword,
        _id: this.state.updateID}
    fetch(`https://git.heroku.com/my-helio-cart-api.git/users`, {
        method: "PUT",
        credentials: 'include',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(modifiedObject)
    })
    .then(inventory => {
        resolve(inventory.json())
    }).catch(reject)
})

modifyUser = () => {
    console.log('clicked');
    this.modifyUserInfo()
    .then(userList =>
        this.setState({
            userList: userList
        }))
}

removeUserFromList = (_id) => new Promise((resolve,reject) => {
    fetch(`https://git.heroku.com/my-helio-cart-api.git/users/${_id}`, {
        method: "DELETE",
        credentials: 'include'
    })
    .then(users => {
        resolve(users.json())
    }).catch(reject)
})

removeUser = (user) => () => {
    console.log('clicked');
    this.removeUserFromList(user._id)
    .then(users =>
        this.setState({
            userList: users
        }))
}



  render() {
      return this.state.error ?
        <div>
            <p style={{color: 'red', fontSize: 30}}>USER NOT AUTHORIZED</p>
            <Link style={{fontSize: 20, textDecoration: 'none'}} exact to='/'>Go to login page</Link>
        </div>
        :
      <div style={{marginTop: 10}}>
      <Link style={{textDecoration: 'none', fontSize: 20}} to='/admin/admin-management'>Manage Admin Accounts</Link>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div>
            
           {this.state.modifyButtonClicked === false ? 
           <div style={{display: 'flex', flexDirection: 'column'}}>

                             {/* ------------------------------ADD USER--------------------------------- */}

            <h1>Add Customer Account</h1>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <label style={{height: 40}}>Username: <input name='username' value={this.state.username} placeholder='yourname' ref='username' type='text' onChange={this.handleChange}></input></label>
              <label style={{height: 40}}>Email: <input name='email' value={this.state.email} type='email' placeholder='example@email.com' ref='email' onChange={this.handleChange}></input></label>
              <label style={{height: 40}}>Password: <input name='password' value={this.state.password} ref='password' placeholder='123abc' onChange={this.handleChange}></input></label>
            </form>
              <button style = {{
                color: '#07AAFF', 
                backgroundColor: '#282c34',
                height: 25,
                width: 120,
                fontWeight: 'bold',
                cursor: 'pointer',
                alignSelf: 'center'}} onClick={this.addUser()} type="button">Add User</button>
           </div>
           :  
                
            <div>
                           {/* -----------------------USER MODIFICATION---------------------------- */}

               <h1>Modify Customer</h1>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label style={{height: 40, justifySelf: 'center', fontWeight: 'bold'}}>Item ID: {this.state.updateID}</label>
                    <label style={{height: 40}}>Username: <input name='updatedUsername' placeholder='yourname' ref='updateUsername' value={this.state.updatedUsername} type='text' onChange={this.handleChange}></input></label>
                    <label style={{height: 40}}>Email: <input name='updatedEmail' type='email' placeholder='example@email.com' value = {this.state.updatedEmail} ref='updateEmail' onChange={this.handleChange}></input></label>
                    <label style={{height: 40}}>Password: <input name='updatedPassword' ref='updatePassword' placeholder='abc123' value = {this.state.updatedPassword} onChange={this.handleChange}></input></label>
                </form>
                    <button type="button" style = {{
                        color: '#07AAFF', 
                        backgroundColor: '#282c34',
                        height: 25,
                        width: 120,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        alignSelf: 'center'}} onClick={
                            this.modifyUser}>Update Item</button>
                <br></br>
                
                <p>Click below to</p>
                <p style={{fontWeight: 'bold', color: '#07AAFF', cursor: 'pointer'}} onClick={this.handleAddTextClick}>Add a new user</p>
            </div>
}
          </div>
        
        {/* ------------------------USER LIST DISPLAY ----------------------- */}

          <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
            <h1>Customer User List</h1>

            {this.state.error!==null ?
               <p style={{color: 'red'}}>{this.state.error}</p>
               :

            <table style={{border: '1px solid gray'}}>
                <thead  style={{border: '1px solid gray'}}>
                    <tr>
                        <th style={{border: '1px solid gray'}}>Username</th>
                        <th style={{border: '1px solid gray'}}>Email</th>
                        <th style={{border: '1px solid gray'}}>Password</th>
                        <th style={{border: '1px solid gray'}}>Actions</th>
                    </tr>
                </thead>
               
               
               
                <tbody>
            {this.state.userList.map((user)=> (
            
                
                    <tr>
                        <td style={{border: '1px solid gray'}}>{user.username}</td>
                        <td style={{border: '1px solid gray'}}>{user.email}</td>
                        <td style={{border: '1px solid gray'}}>{user.password}</td>
                        <td style={{display: 'flex', flexDirection: 'column', border: '1px solid gray', height: 45, paddingLeft: 5}}>
                            <button style = {{
                                color: '#07AAFF', 
                                backgroundColor: '#282c34',
                                height: 25,
                                width: 80,
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                alignSelf: 'center',
                                marginRight: 5}} 
                                onClick={this.handleModifyClick(user)}>Modify</button>
                            <button style = {{
                                color: '#07AAFF', 
                                backgroundColor: '#282c34',
                                height: 25,
                                width: 80,
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                alignSelf: 'center',
                                marginRight: 5}} 
                                onClick={this.removeUser(user)}>Remove</button> 
                        </td>
                    </tr>
            
            ))}
            </tbody>
               
            </table>
            }
          </div>
               
      </div>
               
      </div>
  }
}
export default UserManagement;