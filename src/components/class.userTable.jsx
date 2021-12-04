import React, { Component} from 'react';
import users from './usersData'
class UserTable extends Component {
  state={
    users : users
 }
 handelDeleteUser = (id)=>{
     this.setState({users:this.state.users.filter(user=> user.id !== id)})
 }  
 handelAddUser = ()=> {
   const name = prompt('enter your name')
   const status = prompt('enter your status')
   const email = prompt('enter your email')
   this.setState ({users: [...this.state.users,{id: Math.random() * 1000 ,name,status,email }] })
 }
 handelUpdateUser = (oldUser) => {
  const name = prompt('enter your name',oldUser.name)
  const status = prompt('enter your status',oldUser.status)
  const email = prompt('enter your email',oldUser.email)
  this.setState ( { users : this.state.users.map(user => user.id === oldUser.id ? {
    ...oldUser,
    name,
    status,
    email
  } : user )})

 }
  render () {
        return (
          <div>
            <button onClick={this.handelAddUser}>add new student</button>
            {/* چون پارامتری به عنوان ورودی نداره بذون 
            arrowfunction 
            مینویسسم
             */}
            <table> 
        <thead>
          <tr>
            <td>ID</td>
            <td>name</td>
            <td>status</td> 
            <td>email</td> 
            <td>Action</td>
          </tr>    
        </thead>
        <tbody>
          {
             this.state.users.map( (user) =>(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.status}</td>
                <td>{user.email}</td>
                <td><button onClick={ ()=> this.handelUpdateUser(user)}>{'update'}</button>
                <button onClick={()=>this.handelDeleteUser(user.id)}>{'delete'}</button></td>
              </tr>
            ))
          }
         
        </tbody>
      </table>
      </div>
        )
    }
}
export default UserTable