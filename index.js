import mongoose from "mongoose";
import Blog from './model/Blog.js';
import User from './model/User.js'

mongoose.connect("mongodb+srv://Ritik:Ritikkhan123@cluster0.nuwbqb9.mongodb.net/?retryWrites=true&w=majority")

//Create a new blog post object
//const article = new Blog({

 //slug: 'awesome-post',
  //published: true,
 //content: 'This is the best post ever',
  //tags: ['featured', 'announcement']
//});
//await article.save();

// Insert the article in our MongoDB database
// await article.save();

// const article = await Blog.findById("63cecea5c3e9d48cd44d1ea0").exec();
 //article.title = "The Most Awesomest Post!!";
//await article.save();
//console.log(article);

//const blog = await Blog.findOne({ title: "The Most Awesomest Post!!" })
//console.log(blog);

//const blog = await Blog.exists({title:"The Most Awesomest Post!!"})
//console.log(blog);

//const blog = await Blog.where("title").equals("Ritik!")
//console.log(blog);

//const blog = await Blog.where("author").equals("Jesse Hall").select("title author")
//console.log(blog);

const user =  await User.create({
  name :"ritik",
  email:"ritikkhandelwal650@gmail.com"
})


const blog = await Blog.create({
  title:"osm Post!",
  slug:"Awasome Post",
  author: user._id,
  content: "this is post name",
  tags : ['furniture','glucone']

});
console.log(blog);

const 
