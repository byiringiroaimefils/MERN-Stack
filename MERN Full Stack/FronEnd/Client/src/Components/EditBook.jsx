// Dependencies
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link, useParams } from "react-router-dom"




export default function CreatBook() {


  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [PublishYear, setPublishYear] = useState('');

  // Navigate for component.
  const navigate = useNavigate()
  // For getting Id of book is going to Update
  const { id } = useParams()

  // This function is used to get Data according to id 
  useEffect(() => {
    axios.get(`http://localhost:8080/book/${id}`)
      .then((respond) => {
        setTitle(respond.data.Title)
        setAuthor(respond.data.Author)
        setPublishYear(respond.data.PublishYear)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  //  This function of updating that book fetched according to it's id  
  const HandleEditBook = () => {
    const data = {
      Title,
      Author,
      PublishYear,
    }
    axios.put(`http://localhost:8080/book/${id}`, data)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }



  return (
    <div>
      <div className="m-5 ">
        <button className="flex rounded  bg-sky-600 p-3" >
          <Link to='/'>
            Back
          </Link>
        </button>
      </div>
      <div className="m-5">
        <h2 className="font-extrabold">UPDATE BOOK</h2>

      </div>
      <div className=" flex justify-center items-center h-96 flex-col">
        <input type="text"
        placeholder="Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border w-96 h-10 p-3"
        /> <br />
        <input type="text"
        placeholder="Author"
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
          className="bg-transparent border w-96 h-10 p-3"
        /><br/>
        <input type="number"
        placeholder="PublishYear"
          value={PublishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className="bg-transparent border w-96 h-10 p-3"
        /> <br /><br />
        <button onClick={HandleEditBook} className="flex rounded  bg-sky-600 p-3  w-96">Update</button>


      </div>
    </div>
  )
}
