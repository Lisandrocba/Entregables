const http = require('http');

const server = http.createServer((req, res)=>{
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    res.end(JSON.stringify({
        id: getRandomArbitrary(1,10).toFixed(0),
        title: `producto ${getRandomArbitrary(1,10).toFixed(0)}`,
        price: getRandomArbitrary(0.00,9999.99).toFixed(2),
        thumbnail: `foto ${getRandomArbitrary(1,10).toFixed(0)}`
    }))
})

server.listen(8080,()=>{
    console.log('listening on port 8080')
})