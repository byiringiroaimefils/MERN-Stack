import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"


export default function ShowDetls() {

    const [Book, setBook] = useState([]);
    const [Loading, setLoading] = useState(false);
    const { id } = useParams();


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


    return (
        <div>
            {Loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="m-5">
                        <button className="flex rounded  bg-sky-600 p-3" >
                            <Link to='/'>
                                Back
                            </Link>
                        </button>
                    </div>
                    <div>
                        <div className="">
                            <h4>
                                <h2 className="font-extrabold">TITLE</h2>
                                {Book.Title}
                            </h4>
                            <h4>
                                <h2 className="font-extrabold">AUTHOR</h2>
                                {Book.Author}
                            </h4>
                            <h4>
                                <h2 className="font-extrabold">Decription</h2>
                                {Book.Decription}
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

