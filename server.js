const http = require('http')

const server = http.createServer((req,res)=>{

res.setHeader('content-type','application/json')

if(req.url=="/home"){
    res.write("welcome to home")
}else{
    res.statusCode=404
    res.write("page not found")
}
res.end()
})

server.listen(4000,()=>{
  console.log("server running")
})
