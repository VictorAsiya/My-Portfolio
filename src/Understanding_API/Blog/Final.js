// import React from 'react'
// import List from './List'
// import { useState, useEffect } from 'react'

// function Home() {
// const [blog, setBlog] = useState(null)
// const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setTimeout(() => {
//       fetch('http://localhost:8000/data')
//       .then(res =>{
//         return res.json()
//       })
//       .then(data => {
//         setBlog(data)
//         setLoading(false)
//       })
//     }, 1000)
//   }, [])

//   return (
//     <div>
//       {loading && <h1>Loading...</h1>}
//       {blog && <List vicBlog = {blog}/>}
//     </div>
//   )
// }

// export default Home

// import React from 'react'
// import { useState, useEffect } from 'react'
// import List from './List'

// function Home() {
//   const [blog, setBlog] = useState(null)
//   const [timeOut, setTime] = useState(true)
//   const [error, SetError] = useState(true)

//   useEffect(()=>{
//     setTimeout(() =>{
//       fetch('http://localhost:8000/data')
//       .then(res =>{
//         if(!res.ok){
//           throw Error('Could not fetch data')
//         }
//         return res.json()
//       })
//       .then(data =>{
//         setBlog(data)
//         setTime(false)
//         SetError(false)
//       })
//       .catch((err) =>{
//         SetError(err.message)
//         setTime(false)
//       })
//     }, 2000)
//   }, [])
//   return (
//     <div>
//       {error && <div>{error}</div>}
//       {timeOut && <div>Loading...</div>}
//       {blog && <List myBlog = {blog} />}
//     </div>
//   )
// }

// export default Home

// import { useState, useEffect } from 'react'
// import List from './List.js'
// import useFetch from './useFetch.js'

// function Home() {

// const {blog, loadingTime, error} = useFetch('http://localhost:8000/data')

//   return (
//     <div>
//       {error && <div>{error}</div>}
//     {loadingTime && <div>Loading...</div>}
//     {blog && <List myBlog = {blog} />}
//     </div>
//   )
// }

// export default Home

// Trial
// import List from './List'
// import useFetch from './useFetch.js'
// import { useState, useEffect } from 'react'

// function Home() {

//   const {blog, loading, error} = useFetch('http://localhost:8000/data')
//   return (
//     <div>
//       {blog && <List myBlog ={blog}/>}
//       {loading && <div>Loading...</div>}
//       {error && <div>{error}</div>}

//     </div>
//   )
// }

// export default Home

// import React from 'react'
// import useData from './useFetch'
// import List from './List'

// function Home() {
//   const {dataBlog, loadTime, error} = useData('http://localhost:8000/data')
//   return (
//     <div>
//       {dataBlog && <List blog = {dataBlog}/>}
//       {loadTime && <div>loading...</div>}
//       {error && <div>{error}</div>}
//     </div>
//   )
// }

// export default Home

import React from "react";
import List from "./List";
import useFetch from "./useFetch";
import "./Final.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// function Final() {
//   const [data, Load, error] = useFetch("http://localhost:4000/victor");
//   return (
//     <div className="FinalDiv">
//       <div className="left delay">
//        {data && <List  myBlog = {data.filter((data)=> data.name === "Hi,\nI'm Victor Asiya")}/>}
//       </div>
      
//       {Load && <div className="Loading"><div className="spinner"> </div> <p className="p">Loading...</p></div> }
//       <div className="right delay">
//       {data && <List myBlog = {data.filter((data)=> data.name !== "Hi,\nI'm Victor Asiya")}/>}
//         {error && <div>{error}</div>}
//       </div>
//     </div>
//   );
// }


function Final() {
  const [data, Load, error] = useFetch("https://my-portfolio-api-pi.vercel.app/api/menu");
  return (
    <div className="FinalDiv">
      <div className="left delay">
        {data && data.data && (
          <List myBlog={data.data.filter((item) => item.name === "Hi,\nI'm Victor Asiya")} />
        )}
      </div>

      {Load && (
        <div className="Loading">
          <div className="spinner"> </div>
          <p className="p">Loading...</p>
        </div>
      )}
      <div className="right delay">
        {data && data.data && (
          <List myBlog={data.data.filter((item) => item.name !== "Hi,\nI'm Victor Asiya")} />
        )}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default Final;
