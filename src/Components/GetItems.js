
export const getItems = async() => {
    try {
      const response = await fetch("https://my-helio-cart-admin.herokuapp.com/admin/items",
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
      const response = await fetch("https://my-helio-cart-admin.herokuapp.com/users", 
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
      const response = await fetch("https://my-helio-cart-admin.herokuapp.com/admins", 
      {
        credentials: 'include'
      })
      return response.json();
    } 
    catch (error) {
      console.error(error)
    }
    
    
  }


 