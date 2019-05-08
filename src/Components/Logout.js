export const clearCookies = () => new Promise((resolve, reject) => {
    fetch("https://my-helio-cart-admin.herokuapp.com/admin/logout", {
    headers: {"content-Type": "application/json"},    
    credentials: 'include'
    })
    .then(response => {
         
        console.log('logout successful')
        
    }).catch( response => {
        console.log('logout catch')
    })  


}) 

