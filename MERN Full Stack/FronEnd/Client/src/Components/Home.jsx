import { useState, useEffect } from "react"
// import Spinner from "./Spinner"
import axios from "axios"
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"


export default function Home() {
    const [Book, setBook] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8080/book")
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
    return(
 
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl my-8">Book List</h2>
                <Link to="book/CreatBook">
                    <MdOutlineAddBox className="text-2xl" />
                </Link>
            </div>
            {
                Loading ? (
                    // <Spinner />
                    <p>Loading....</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th className="border border-slate-600  rounded-md">No</th>
                                <th className="border border-slate-600  rounded-md">Title</th>
                                <th className="border border-slate-600  rounded-md">Author</th>
                                <th className="border border-slate-600  rounded-md">PublishYear</th>
                                <th className="border border-slate-600  rounded-md">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Book.map((book, index) => (
                                <tr key={book._id} className="h-8">
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {index+1}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {book.Title}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {book.author}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {book.PublishYear}
                                    </td>
                                    <td>
                                        <div className="flex justify-center gap-x-4">
                                            <Link to={`book/detail/`}>
                                                <BsInfoCircle className="text-2xl" />
                                            </Link>
                                            <Link to={`/book/edit/${book.id}`}>
                                                <AiOutlineEdit className="text-2xl" />
                                            </Link>
                                            <Link to={`/book/delete/${book.id}`}>
                                                <MdOutlineDelete className="text-2xl" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

