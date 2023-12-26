// import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    // console.log(bookmark)
     const {title} = bookmark
    //  console.log(title)
    return (
        <div>
              <div className='bg-slate-100 m-4 p-4 rounded-xl'>
             <h2 className="text-2xl">{title}</h2>
              </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object
};

export default Bookmark;