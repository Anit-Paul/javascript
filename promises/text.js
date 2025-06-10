async function getInfo(){
    const response=await fetch('https://fake-json-api.mock.beeceptor.com/users')
    const data=await response.json()
    console.log(data[0].username)
}
getInfo()