const http = require("http");
const url = require("url");

const port = 3014;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    const query = parsedUrl.query;

    res.setHeader("Content-Type", "text/plain");

    switch (pathname) {
        case "/":
            if (method === "GET") {
                const name = query.name || "Guest";
                res.writeHead(200);
                res.end("Hello from Home Page. Hello " + name + ".");
            } else {
                res.writeHead(405);
                res.end("Method Not Allowed on Home Page.");
            }
            break;

        case "/contactus":
            if (method === "GET") {
                res.writeHead(200);
                res.end("GET: Contact Us Page");
            } else if (method === "POST") {
                res.writeHead(200);
                res.end("POST: New Contact Submitted");
            } else if (method === "PUT") {
                res.writeHead(200);
                res.end("PUT: Contact Information Updated");
            } else if (method === "DELETE") {
                res.writeHead(200);
                res.end("DELETE: Contact Removed");
            } else if (method === "PATCH") {
                res.writeHead(200);
                res.end("PATCH: Contact Partially Updated");
            } else {
                res.writeHead(405);
                res.end("Method Not Allowed on Contact Us Page.");
            }
            break;

        case "/about":
            if (method === "GET") {
                res.writeHead(200);
                res.end("GET: About Page");
            } else if (method === "POST") {
                res.writeHead(200);
                res.end("POST: About Info Submitted");
            } else if (method === "PUT") {
                res.writeHead(200);
                res.end("PUT: About Info Updated");
            } else if (method === "DELETE") {
                res.writeHead(200);
                res.end("DELETE: About Info Removed");
            } else if (method === "PATCH") {
                res.writeHead(200);
                res.end("PATCH: About Info Partially Updated");
            } else {
                res.writeHead(405);
                res.end("Method Not Allowed on About Page.");
            }
            break;

        case "/searchabout":
            if (method === "GET") {
                res.writeHead(200);
                res.end("GET: Search About Page");
            } else if (method === "POST") {
                res.writeHead(200);
                res.end("POST: Search Query Submitted");
            } else if (method === "PUT") {
                res.writeHead(200);
                res.end("PUT: Search Settings Updated");
            } else if (method === "DELETE") {
                res.writeHead(200);
                res.end("DELETE: Search History Cleared");
            } else if (method === "PATCH") {
                res.writeHead(200);
                res.end("PATCH: Search Filters Partially Updated");
            } else {
                res.writeHead(405);
                res.end("Method Not Allowed on Search About Page.");
            }
            break;

        default:
            res.writeHead(404);
            res.end("404 Not Found");
            break;
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
