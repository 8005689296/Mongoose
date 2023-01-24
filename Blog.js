import mongoose, { SchemaType } from 'mongoose'

const {Schema,SchemaTypes,model} = mongoose;

const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: {
        type: SchemaTypes.ObjectId,
        ref:"User",
        required:true,
    },
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
      user: {
        type:SchemaTypes.ObjectId,
        ref:"User",
        required:true,
      },
      content:String,
      votes: Number
    }]
})
       
        // middleware
        blogSchema.pre('save', function(next){
            this.Updated = Date.now();
            next();
        });
    

    
    



const Blog = model('Blog',blogSchema);
export default Blog;



