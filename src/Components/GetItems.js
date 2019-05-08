
export const getItems = async() => {
    try {
      const response = await fetch("http://localhost:4000/admin/items",
      {
        credentials: 'include'
      })
      return response.json();
  }
    catch(error) {
      console.error(error)
    }
  }


export const getUsers = async() => {
    try{
      const response = await fetch("http://localhost:4000/users", 
      {
        credentials: 'include'
      })
      return response.json();
    } 
    catch (error) {
      console.error(error)
    }
    
    
  }

  export const getAdmins = async() => {
    try{
      const response = await fetch("http://localhost:4000/admins", 
      {
        credentials: 'include'
      })
      return response.json();
    } 
    catch (error) {
      console.error(error)
    }
    
    
  }


 