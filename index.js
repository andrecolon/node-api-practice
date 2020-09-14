const server = require('./server');

const port = 6000; 

server.listen(port, () => {
    console.log(`\n*Server is up and running on port ${port}*\n`)
})