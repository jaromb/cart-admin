export const clearCookies = () => new Promise((resolve, reject) => {
    fetch("http://localhost:4000/admin/logout", {
    headers: {"content-Type": "application/json"},    
    credentials: 'include'
    })
    .then(response => {
         
        console.log('logout successful')
        
    }).catch( response => {
        console.log('logout catch')
    })  


}) 

