const port = 3000,
express = require('express'),
layouts = require('express-ejs-layouts'),
homeController = require('./controllers/homeController'),
errorController = require('./controllers/errorController');
const app = express();

app.set("view engine", "ejs");
app.use(layouts);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.get("/name/:userName", homeController.respondWithName);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});


