const usersTable = ({users=[]}) => {
    return(
        <div>
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
             users.map( (user) =>(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.status}</td>
                <td>{user.email}</td>
                <td><button>update</button>
                <button>delete</button></td>
              </tr>
            ))
          }
         
        </tbody>
      </table>
        </div>
    )
}

export default usersTable