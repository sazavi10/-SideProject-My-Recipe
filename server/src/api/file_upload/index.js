const Router = require('koa-router');
const multer = require('koa-multer');
const Recipe = require('models/recipe');

const file_upload = new Router();

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, files, cb) {
        cb(null, './upload');
      },
      filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + file.originalname);
      }
    }),
  });

file_upload.post('/', upload.any('files'), async ctx => {
   const { files } = ctx.req;
   const { id } = ctx.req.body;
  try {
    console.log(files)
    await Recipe.find({ _id: id }, function(err, doc) {
      doc.forEach(function(rb){
        rb.recipeBody.forEach(function(images, i){
          Recipe.updateOne({"recipeBody._id" : images._id }, { $set : { 'recipeBody.$.image' : files[i+1].filename } }, (err, res) => {
            if (!err) {
              console.log(res);
            }else{
              console.log(err);
            }
          }) 
        });      
      });
    });
    const recipe = await Recipe.updateOne( {  _id: id }, { $set: {recipeCoverImage : files[0].filename} })
        if (!recipe) {
            ctx.status = 404;
            return;
        }
        ctx.body = recipe;
    } catch (e) {
        ctx.throw(e, 500);
    }
    ctx.status = 200;
});

module.exports = file_upload;