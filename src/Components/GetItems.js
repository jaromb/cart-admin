
export const getItems = async() => {
    try {
      const response = await fetch("https://git.heroku.com/my-helio-cart-api.git/admin/items",
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
      const response = await fetch("https://git.heroku.com/my-helio-cart-api.git/users", 
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
      const response = await fetch("https://git.heroku.com/my-helio-cart-api.git/admins", 
      {
        credentials: 'include'
      })
      return response.json();
    } 
    catch (error) {
      console.error(error)
    }
    
    
  }


 