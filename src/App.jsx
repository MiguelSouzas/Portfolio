import { Outlet, Link } from "react-router-dom"

function App() {

  return (
    <>
        <div>
          <Link to = "/">
            <button> Home </button>
          </Link>
          <Link to = "/about">
            <button> About me </button>
          </Link>
          <Link to = "/services">
            <button> Services </button>
          </Link>
          <Link to = "/skills">
            <button> Skills </button>
          </Link>
          <Link to = "/portfolio">
            <button> Portfolio </button>
          </Link>
          <Link to = "/contact">
            <button> Contact </button>
          </Link>
        </div>
        <Outlet/>
    </>
  )
}

export default App
