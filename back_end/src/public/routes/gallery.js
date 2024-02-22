// var express = require('express');
// const { TokenExpiredError } = require('jsonwebtoken');
// var router = espress.Router();
// var multer = require('multer');
// var Gallery = require('../models/Gallery.js');

// //save file to server storage 
// var storage = multer.diskStorage({
// destination: (req, file, cb)=>{
// cb(null, './public/images');
// },
// filename: (req, file, cb)=> {
// console.log(file);
// var filetype='';
// if(file.mimetype ==='image/gif') {
//   filetype= 'gif';
// }


// if(file.mimetype ==='image/png'){
// filetype = 'png';
// }

// if(file.mimetype ==='image/jpeg'){
// filetype='jpg';
// }

// cb(null, 'image-'+Date.now() + '.'+filetype);
// }
// });
 
// var upload = multer({storage: storage});


// //post data
// router.post('/',upload.single('file'),function(req, res, next){
// if(!req.file){
// return res.status(500).send({ message: 'Échec du téléchargement'});
// } else {
// req.body.imageUrl ='http://localhost:5500/Gallery'+req.file.filename;
// Gallery.create(req.body, function (err, gallery){

// if(err){
// console.log(err);
// return next(err);
// }
// res.json(gallery);
// });
// }
// });

// //get data by id 
// router.get('/:id',function(req, res, next){
// Gallery.findbyId(req.params.id, function (err, gallery){
// if (err) return next(err);
// res.json(gallery),TokenExpiredError;
// });
// });

// module.exprot = router;
