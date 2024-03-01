import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"




export default function CreatBook() {
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [PublishYear, setPublishYear] = useState('');
  const  navigate  = useNavigate()



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
      <Link to="/">Back</Link>
      <div>
        <label htmlFor="">Title</label><br />
        <input type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border"
        /> <br />
        <label htmlFor="">Author</label><br />
        <input type="text"
          onChange={(e) => setAuthor(e.target.value)}
          className="bg-transparent border"
        /> <br />
        <label htmlFor="">PublishYear</label><br />
        <input type="number"
          onChange={(e) => setPublishYear(e.target.value)}
          className="bg-transparent border"
        /> <br />
        <button onClick={HandleSaveBook}>Save</button>
      </div>
    </div>
  )
}
