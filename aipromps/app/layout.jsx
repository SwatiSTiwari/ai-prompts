// "use client";
import "../styles/globals.css"
import "../components/Nav.jsx"
import "../components/Provider.jsx"
import Nav from "../components/Nav.jsx"

export const metadata={
    title: "Promptopia",
    description: "discover and share ai prompts",
}


const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
    <div className="main">
        <div className="gradient"/>
        </div>
        <main className=" relative z-10 flex  max-w-7xl mx-auto sm:px-16 px-6">
          <Nav/>
            {children}  
        </main>
    </body>
    </html>
  )
}

export default Layout