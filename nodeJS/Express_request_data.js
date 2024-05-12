Query string parameters
// http://localhost:3000/users/may uses dynamic parameters, also known as route parameters.
// - In requests using dynamic parameters, a part of the URL dynamically changes to represent a parameter. This typically corresponds to a segment of the path.
// - Dynamic parameters are primarily used for resource identification. They dynamically generate paths to identify specific resources, which the server interprets to retrieve and return the corresponding resource.
app.get("/users/:username", function(req, res) {
    const username = req.params.username;
    res.send("<h1>Profile for " + username + "</h1>");
 });

Route parameters
// http://localhost:3000/users?name=may&age=21 uses query parameters. 
// - Requests using query strings append parameters as key-value pairs at the end of the URL, following a question mark (?). These parameters are used to pass additional information to the server.
// - Query strings, on the other hand, are often used for filtering, searching, or specifying options. For instance, they can convey search terms or criteria for filtering results.
 app.get("/hello", function(req, res) {
    const html =
    `<h1>Hello, ${req.query.name}!</h1>
     <p>You are ${req.query.age} years old.</p>`;

 res.send(html);
});