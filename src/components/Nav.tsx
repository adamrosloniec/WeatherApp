import { Link } from "react-router-dom"

interface NavProps {
  index: number
}

const Nav = ({ index }: NavProps) => (
  <nav className="flex fixed top-0 left-0 right-0 w-full z-50 justify-center pt-4 pb-4">
    <Link
      to={index === 0 ? "/tomorrow" : "/"}
      className="
  px-4 py-2 bg-green-400 rounded-lg hover:bg-green-500 text-white font-semibold transition duration-300"
    >
      {index === 0 ? "Tomorrow" : "Today"}
    </Link>
  </nav>
)

export default Nav
