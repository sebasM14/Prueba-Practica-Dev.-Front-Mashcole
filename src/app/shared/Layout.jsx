import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <Header />
      
      <main className="body">
        <Outlet />
      </main>
      
      <Footer />
    </>
  )
}
