export const clearCookies = () => new Promise((resolve, reject) => {
    fetch("https://git.heroku.com/my-helio-cart-api.git/admin/logout", {
    headers: {"content-Type": "application/json"},    
    credentials: 'include'
    })
    .then(response => {
         
        console.log('logout successful')
        
    }).catch( response => {
        console.log('logout catch')
    })  


}) 

