let http = require('http')
let data = [
    {name: 'John', age: 30},
    {name: 'John', age: 30},
    {name: 'John', age: 30},
]
http.createServer((req, res) => {
    res.writeHead(400, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(data));
    res.end()
}).listen(3000)