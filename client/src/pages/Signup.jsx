import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
const [formData, setFormData] = useState({})
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
console.log(formData);
const navigate = useNavigate()
const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.currentTarget.id]: e.currentTarget.value
    })
}
const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
    setLoading(true)
    const res = await fetch('/api/auth/signup', {
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    })
    const data = await res.json()
    console.log(data);
    if(data.success===false){
        setError(data.message)
        setLoading(false)
        return
    }
    setLoading(false)
    setError(null)
    navigate('/signin')
} catch (error) {
  setError(error.message)  
  setLoading(false)
}
}
  return (
    <div className=' mt-10 p-3 max-w-lg mx-auto'>
        <h1 className='uppercase font-bold text-center text-3xl'>Sign Up</h1>
        <form className='flex flex-col gap-4 mt-6' onSubmit={handleSubmit}>
            <input type="text" placeholder='username' id='username' className='text-lg focus:outline-none border p-2 rounded-lg' onChange={handleChange}/>
            <input type="email" placeholder='email' id='email' className='text-lg focus:outline-none border p-2 rounded-lg' onChange={handleChange}/>
            <input type="password" placeholder='password' id='password' className='text-lg focus:outline-none border p-2 rounded-lg' onChange={handleChange}/>
            <button disabled={loading} className='bg-green-500 p-3 text-white rounded-lg text-lg uppercase hover:bg-green-400 disabled:bg-green-400'>{loading? 'Loading...':"Sign Up"}</button>
        </form>    
        <div className='flex gap-2 mt-5'>
            <h1>Have an account?</h1>
            <Link to='/signin'>
            <span className='cursor-pointer text-blue-600'>Sign In</span>
            </Link>
            </div> 
            {error && <p className="text-red-500 mt-5">{error}</p>}   
    </div>
  )
}
export default Signup