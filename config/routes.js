var scrape = require("../scripts/scrape");

var headLinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");


module.exports = function(router) {
    // This route renders the homepage
    router.get("/", function(req, res){
        res.render("home");
    });
    // This route renders the saved handlebars page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
    router.get("/api/fetch", function(req, res){
        headLinesController.fetch(function(err, docs){
            if (!docs || docs.insertCount === 0) {
                res.json({
                    message: "No New Articles Found..."
                });
            } else {
                res.json({
                    message: docs.insertedCount + "new articles."
                });
            }
        });
    });
    router.get("/api/headLines", function(req, res){
        var query = {};
        if (req.query.saved) {
            query = req.query;
        }
        headLinesController.get(query, function(data){
            res.json(data);
        });
    });

    router.delete("/api/headLines/:id", function(req, res){
        var query = {};
        query._id = req.params.id;
        headLinesController.delete(query, function (err, data){
            res.json(data);
        });
    });

    router.patch("/api/headlines", function(req, res){
        headLinesController.update(req.body, function(err, data){
            res.json(data);
        });
    });

    router.get("/api/:headLine_id?", function(req, res){
        var query = {};
        if (req.params.headline_id) {
            query._id = req.params.headline_id;
        }
        
        notesController.get(query, function(data){
            res.json(data);
        });
    });
        router.delete("/api/notes/:id", function(req, res){
            var query = {};
            query._id = req.params.id;
            notesController.delete(query, function (err, data){
                res.json(data);
            });
        });

        router.post("/api/notes", function(req, res){
            notesController.save(req.body, function (err, data){
                res.json(data);
    
}); 
});
}