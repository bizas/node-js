const users = ['Daniela','Grace'];

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    const headerHtml = "";

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title><head>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>users</title><head>');
        res.write('<body><ul>');
        for (let i in users) {
            res.write('<li>'+users[i]+'</li>');
        }
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            users.push(user);
            console.log(user);
            
        });
        res.statusCode = 302;
        res.setHeader('Location','/users');
        return res.end();
    }
};


module.exports = {
    handler: requestHandler
};