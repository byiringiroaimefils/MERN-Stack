// Dependencies could be used.
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"



export default function DeleteBook() {
  // This is used to navigate
  const navigate = useNavigate()
  // This used to track id of this we are going to Delete.
  const { id } = useParams()

  // Funcion For deleting Book according to it Id
  const DeleteBook = () => {
    axios.delete(`http://localhost:8080/book/${id}`)
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
      <div className="flex justify-center items-center h-80 flex-col">
        <h2>Do you want to Delete This Book</h2>
        {/* This button is going to Delete book by calling above function. */}
        <button onClick={DeleteBook} className="rounded  bg-red-700 p-3 w-96">Yes,Delete It</button>
      </div>
    </div>

  )
}
