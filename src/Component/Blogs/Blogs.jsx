
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleBookMarks}) => {

      const [blogs , setBlogs]=useState([])

      useEffect( () =>{
           fetch("blogs.json")
           .then(res => res.json())
           .then(data => setBlogs(data))
      },[])
 
    return (
        <div className="md:w-2/3 ">
              <h1 className="text-4xl my-4">Blogs : {blogs.length}</h1>
              {
                blogs.map(blog => <Blog 
                  key={blog.id} 
                  blog={blog}
                  handleBookMarks ={handleBookMarks}
                  ></Blog>)
                  
              }
        </div>
    );
};

Blogs.propTypes={
  
  handleBookMarks:PropTypes.func
}
export default Blogs;