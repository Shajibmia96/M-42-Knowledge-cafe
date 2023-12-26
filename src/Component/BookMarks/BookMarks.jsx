

import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';
const BookMarks = ({bookMarks}) => {
  // console.log(bookMarks)
    return (
        <div className="md:w-1/3 bg-gray-300 ml-5 pt-4 mt-4 text-center">
             <h3 className="my-4 text-4xl">BookMarked blogs : {bookMarks.length}</h3>
             {
                 bookMarks.map(bookmark => <Bookmark
                  key={bookmark.id}
                    bookmark={bookmark}
                 ></Bookmark>)
             }
            
        </div>
    );
};
 
  BookMarks.propTypes ={
    bookMarks:PropTypes.array
  }
export default BookMarks;