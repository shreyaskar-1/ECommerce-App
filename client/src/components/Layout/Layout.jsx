import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main style={{ minHeight: '100vh' }} className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
