import { useState, useEffect } from "react"
// import Spinner from "./Spinner"
import axios from "axios"
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
// import { BsInfoCircle } from "react-icons/bs"
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
    return (

        <div className="p-4">
            <div className="flex   justify-between justify-center items-center">
                <h2 className="text-3xl my-8 pl-5">Book List</h2>

                <Link to="book/CreatBook" className="flex rounded  bg-sky-600 p-3 mr-20">
                    <MdOutlineAddBox className="text-2xl " />
                    <button className="">
                        New
                    </button>
                </Link>

            </div>
            {
                Loading ? (
                    <div className="ml-6">
                        <p>Loading....</p>
                        {/* // <Spinner /> */}
                    </div>
                ) : (
                    <div className="flex gap-5 p-5" >
                        {Book.map((book, index) => (
                            <div key={book._id} className=" border hover:border-sky-600 w-56 p-5 bg-slate-800  opacity-50 cursor-pointer ">
                                <Link to={`book/Detail/${book._id}`}>

                                    <div className="">
                                        <div>
                                            <h6 className="pb-3">
                                                {index + 1}
                                            </h6>
                                            <h4>
                                                <h2 className="font-extrabold">TITLE</h2>
                                                {book.Title}
                                            </h4>
                                            <h4>
                                                <h2 className="font-extrabold">AUTHOR</h2>
                                                {book.Author}
                                            </h4>
                                            <p>
                                                <h2 className="font-extrabold">PUBLISH YEAR</h2>
                                                {book.PublishYear}
                                            </p>
                                        </div>

                                        <div className="flex justify-center justify-between  pt-5">
                                            {/* <Link to={`book/Detail/${book._id}`}>
                                                {/* <BsInfoCircle className="text-2xl" /> */}
                                            {/* </Link> */} 
                                            <Link to={`/book/edit/${book._id}`} >
                                                <AiOutlineEdit className="text-2xl hover:text-sky-600" />
                                            </Link>
                                            <Link to={`/book/delete/${book._id}`} >
                                                <MdOutlineDelete className="text-2xl hover:text-red-600" />
                                            </Link>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                        ))}

                    </div>

                )
            }
        </div >
    )
}

