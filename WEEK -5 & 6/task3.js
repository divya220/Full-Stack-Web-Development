const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
app.use (express.static('public'));
app.use(fileUpload());

app.post('/uploads', function (req, res) {

    let sampleFile = req.files.filel;
    let uploadPath = __dirname + '/uploads/' + sampleFile.name;
    sampleFile.mv(uploadPath, function(err) {
        if(err) {
            console.log("No files uploaded");
        }
        res.send("File uploaded successfully");
    });
});
app.listen(5000);