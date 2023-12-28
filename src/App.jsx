
import './App.css'
import BookMarks from './Component/BookMarks/BookMarks'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/header/Header'
import { useState } from 'react'

function App() {
  
    // use state use for bookmarks

    const [bookMarks , setBookMarks] = useState([])
//  use state use for reading time

    const [readTime, setReadTime] = useState(0)
    // console.log(readTime)
  // console.log("bookMarks adding soon" , blog)
    const handleBookMarks =(blog) =>{
        const newBookMarks = [...bookMarks , blog]
        setBookMarks(newBookMarks)
    }

     const handleReadAsMark =(id,time) =>{
          console.log("click read mark", time)
          const newReadingTime = (readTime + time)
          setReadTime(newReadingTime);

          // removed from book marks 
          console.log("Click on id" ,id)
          const newBookMarks = bookMarks.filter(bookMark => bookMark.id !== id)
          setBookMarks(newBookMarks)
     }
               console.log(readTime)
  return (
    <>
         <div className="container max-w-7xl mx-auto">
         <Header></Header>
         <div className="md:flex ">
         <Blogs handleBookMarks ={handleBookMarks}
                 handleReadAsMark ={handleReadAsMark}
         ></Blogs>

         <BookMarks bookMarks={bookMarks} readTime={readTime}></BookMarks>
         </div>
         </div>
    </>
  )
}

export default App
