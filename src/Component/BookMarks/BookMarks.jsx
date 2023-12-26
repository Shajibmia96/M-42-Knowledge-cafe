

import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';
const BookMarks = ({bookMarks , readTime}) => {
  // console.log(bookMarks)
    return (
        <div className="md:w-1/3 bg-gray-300 ml-5 pt-4 mt-4 text-center">
              <div className='bg-slate-100 p-2 mb-4 m-4 rounded-xl'>
                  <h1 className='text-3xl text-purple-500'>Spent time on read : {readTime} min</h1>
              </div>
             <h3 className="my-4 text-4xl">BookMarked blogs : {bookMarks.length}</h3>
             
             {
                 bookMarks.map((bookmark , idx) => <Bookmark
                  key={idx}
                    bookmark={bookmark}
                 ></Bookmark>)
             }
            
        </div>
    );
};
 
  BookMarks.propTypes ={
    bookMarks:PropTypes.array,
    readTime:PropTypes.number
  }
export default BookMarks;