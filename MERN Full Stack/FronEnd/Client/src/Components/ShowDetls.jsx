import { useState, useEffect } from "react"
// import Spinner from "./Spinner"
import axios from "axios"
import { useParams,Link } from "react-router-dom"

export default function ShowDetls() {

    const [Book, setBook] = useState([]);
    const [Loading, setLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8080/book/${id}`)
            .then((data) => {
                setBook(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false);
            })
    }, [])
    console.log(Book)
    return (
        <div>
            {Loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                   <div>
                  <Link to='/'>
                    Back
                  </Link>
                   </div>
                    <div className="">
                        <div>
                            {/* <h6 className="pb-3">
                                {Book._id+1}
                            </h6> */}
                            <h4>
                                <h2 className="font-extrabold">TITLE</h2>
                                {Book.Title}
                            </h4>
                            <h4>
                                <h2 className="font-extrabold">AUTHOR</h2>
                                {Book.Author}
                            </h4>
                            <p>
                                <h2 className="font-extrabold">PUBLISH YEAR</h2>
                                {Book.PublishYear}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

