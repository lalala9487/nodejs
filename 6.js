//http module

const http = require('http');

const server = http.createServer((req, res) => {               //You can't write to the response stream after you have already ended it.
    if (req.url === '/'){                                   
        res.end('this is home page');
    }else if (req.url === '/about'){
        res.end(`<h1>this is about page<h1>`);
    }else{
        res.end(`<h1>there is an error<h1>
        <a href="/">back to home<a>`);
    }
})

server.listen(5000);

