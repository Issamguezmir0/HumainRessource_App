const express = require('express');
const router = express.Router();
const multer = require('multer')
const Admin = require('../models/administrateur')
const admin_controller = require('../controllers/admin-controller');
const requireLoginAdmin = require('../middleware/requireLoginAdmin');

/** administrateur: Se connecter */
router.post('/api/admin-login', admin_controller.admin_login)

/** ajouter un administrateur */
router.post('/api/add-admin', admin_controller.add_admin)

/** supprimer un administrateur */
router.delete('/api/delete-admin', admin_controller.delete_admin)

/** oubli de mot de passe */
router.put('/api/forgot-admin-password', admin_controller.forgot_password)

/** modifier le mot de passe oublie : lien mail */
router.put('/api/reset-admin-password', admin_controller.reset_password)

/** modifier le mot de passe */
router.put('/api/change-admin-password', requireLoginAdmin ,admin_controller.change_password)

/** show admin profile */
router.get('/api/show-admin-profile', requireLoginAdmin, admin_controller.show_profile)
const path = require('path');
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"../../public/images")
//     },
//     filename:(req,file,cb)=>{
//         console.log(file);
//         cb(null,Date.now()+path.extname(file.originalname))
//     }
// });
// const upload = multer({storage:storage})
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
const storageEvents = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../images'));
    },
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext= MIME_TYPE_MAP[file.mimetype];
        cb(null, Date.now()+ '-' +name);
    }
});

router.post('/api/updateImage',multer({storage:storageEvents}).single("file"),(req, res, next) => {
    console.log(req.file)
    if(!req.file) {
        return res.status(500).send({ message: 'Upload fail'});
    
    }else{
        req.body.imageUrl = 'http://localhost:5500/images/' + req.file.filename;
        console.log(req)
         Admin.findByIdAndUpdate({_id:"6220cb6af7c9fa28c0a0bd4c"},{image:req.body.imageUrl},(err, data) => {
             if(!data){
                 console.log(err)
                 return res.status(500).json({message:"error"})
             }
             else {
                 return res.json({data})
             }
         })
    }
})
router.get('/api/getuserById/:id', (req,res)=>{
    Admin.findById(req.params.id,(err, data) => {
        return res.json(data)
    })
})

module.exports = router