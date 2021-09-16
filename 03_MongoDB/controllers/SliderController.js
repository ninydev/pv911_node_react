const model = require("../models/slider");

// Create => POST
exports.post = function (req, res) {
    console.log ("POST start");
    const element = new model (req.body);
    console.log(req.body);
    element.save (function (err) {
        if(err) { console.log(err); return err;}
        return res.json(element);
        //return res.sendStatus(201);
    })
};

// Read => GET
exports.get = function (req, res) {
    console.log ("GET start");
    model.find({},
        function (err, data) {
            if(err) { console.log(err); return err;}
            res.json(data);
        });
}

// Update => PUT
exports.put = function (req, res) {
    console.log ("PUT start");
    const element = new model (req.body);
    model.findByIdAndUpdate(
        req.body._id,
        element,
        {},
        function (err, result) {
            if (err) {console.log(err); res.send(result);}
            res.send(result);
        }
    );
}

// Delete = >DELETE
exports.delete = function (req, res) {
    console.log(req.body._id);
    model.findByIdAndDelete(
        req.body._id,
        {},
        function (err) {
            if (err) res.send(err);
            res.sendStatus(200);
        }
    );
}