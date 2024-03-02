import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"




export default function CreatBook() {

  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [PublishYear, setPublishYear] = useState('');


  const navigate = useNavigate()

  const HandleSaveBook = () => {
    const data = {
      Title,
      Author,
      PublishYear,
    }
    axios.post(`http://localhost:8080/`, data)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <div>
      <div className="m-5">
        <button className="flex rounded  bg-sky-600 p-3" >
          <Link to='/'>
            Back
          </Link>
        </button>
      </div>
        <div className="m-5 "> 
          <h2 className="font-extrabold">CREATE NEW BOOK</h2>

        </div>
      <div className="createNew flex justify-center items-center h-96 flex-col">
        <input type="text"
        placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border w-96 h-10 p-3"
        /> <br />
        <input type="text"
        placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          className="bg-transparent border w-96 h-10 p-3"
        /> <br />
        <input type="number"
        placeholder="PublishYear" 
          onChange={(e) => setPublishYear(e.target.value)}
          className="bg-transparent border w-96 h-10 p-3"
        /> <br /><br />
        <button onClick={HandleSaveBook} className="flex rounded  bg-sky-600 p-3 w-96 items-center">Save</button>
      </div>
    </div>

  )
}
