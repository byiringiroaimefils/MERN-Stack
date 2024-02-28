import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const [data, setData] = useState({})
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:8080/Db")
      .then(res => {
        setData(res.data);
        setLoading(false);
      })

      .catch(err => {
        console.log('Err', err)
        setLoading(false)
      })
  }, [])

  return (

    <div>
      {
        Loading ? (
          <p>Loading....</p>
        ) : (
          <div>
          {data.map(item => (
            <div key={item._id}>
              <p>{item.Task}</p>
            </div>
          ))}
        </div>
        )
      }
    </div>

  )
}

export default App
