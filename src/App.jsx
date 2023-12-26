
import './App.css'
import BookMarks from './Component/BookMarks/BookMarks'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/header/Header'
import { useState } from 'react'

function App() {
  
    // use state use

    const [bookMarks , setBookMarks] = useState([])

    const handleBookMarks =(blog) =>{
        // console.log("bookMarks adding soon" , blog)
        const newBookMarks = [...bookMarks , blog]
        setBookMarks(newBookMarks)
    }

  return (
    <>
         <div className="container max-w-7xl mx-auto">
         <Header></Header>
         <div className="md:flex ">
         <Blogs handleBookMarks ={handleBookMarks}></Blogs>

         <BookMarks bookMarks={bookMarks}></BookMarks>
         </div>
         </div>
    </>
  )
}

export default App
