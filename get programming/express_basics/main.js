const port = 3000,
express = require('express'),
app = express();

app.get("/items/:vegetable", (req,res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for: ${veg}`);
}).listen(port, () => {
    console.log(`Server running at port: ${port}`);
});

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.post("/", (req,res) => {
    console.log('body: ',req.body);
    console.log('query: ',req.query);
    res.send('Post succesfull');
});