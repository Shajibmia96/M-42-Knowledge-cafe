import PropTypes from 'prop-types';

import { BsFillBookmarkStarFill } from "react-icons/bs";
const Blog = ({blog , handleBookMarks ,handleReadAsMark}) => {
    // console.log(blog)
    // const [cover_img , tittle] = blog;
    const {cover_img , title, author_img, author_name ,reading_time ,post_date ,hash_tag} = blog
    return (
        <div className="mb-20 space-y-4">
             <img className="" src={cover_img} alt={`this is images of ${title}`} />
              
              {/* div for author / bookMarks */}
              <div className='flex justify-between'>
                    {/* div for author */}
                    <div className="flex items-center">
                            {/* div for author img */}
                            <div>
                                  <img className="w-[60px] rounded-full" src={author_img} alt="" />
                                  
                            </div>

                            {/* div for author name */}
                            <div className="ml-6">
                            <h1 className="text-3xl font-bold mb-3">{author_name}</h1>
                            <p>{post_date}</p>
                            </div>

                    </div>

                    {/* div for bookMarks */}
                    <div className="space-x-4">
                         <span>{reading_time} min read</span>
                         <button 
                         onClick={()=>handleBookMarks(blog)}
                         className="text-2xl"><BsFillBookmarkStarFill></BsFillBookmarkStarFill></button>
                    </div>
              </div>
             <h1 className="text-[2.5rem] font-bold">{title}</h1>
             <p  className="space-x-4">
                {
                    hash_tag.map((hash , idx )=> <span key={idx}>#{hash}</span>)
                }
             </p>
              <button className='text-2xl font-bold text-purple-800 underline' onClick={() => handleReadAsMark(reading_time)}>Read as mark</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func,
    handleReadAsMark:PropTypes.func
}
export default Blog;