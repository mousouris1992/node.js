

exports.respondWithName = (req,res) => {
    let username = req.params.userName;
    res.render("index", {
        name: username
    });
}