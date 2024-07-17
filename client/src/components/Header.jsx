import { Link } from "react-router-dom"
function Header() {
  return (
    <header className="bg-slate-500 ">
      <div className="flex justify-between max-w-6xl mx-auto p-3 items-center ">
        <h1 className='flex font-bold text-sm sm:text-2xl '>
            <span className='text-black'>Dicky</span>
            <span className='text-green-700'>Estate</span>
        </h1>
        <form >
          <input type="text" placeholder="Search..." className="focus:outline-none rounded-md p-2 w-24 sm:w-64"/>
        </form>
<ul className="flex gap-3">
  <Link to='/'><li className="text-green-100 hover:underline hidden sm:inline">Home</li></Link>
  <Link to='/about'><li className="text-green-100 hover:underline hidden sm:inline">About</li></Link>
  <Link to='/signin'><li className="text-green-100 hover:underline">Signin</li></Link>
</ul>
      </div>
    </header>
  )
}

export default Header