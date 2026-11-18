import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
