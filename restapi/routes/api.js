/**
 * Created by ikhlasfirlana on 5/19/17.
 */
var express = require("express");
var fs = require("fs");
var router = express.Router();

/* GET api listing. */
router.get("/", function(req, res, next) {

    var file = __dirname + '/../upload-folder/download.pdf';
    res.contentType("application/pdf");
    res.set("Content-Disposition", "attachment; filename='dowload.pdf'");
    res.download(file); // Set disposition and send it.
});

module.exports = router;
