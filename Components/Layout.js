import React from 'react';
import Navigation from './Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <style jsx>{`
               div{
                    color: violet;
                }
                img{
                    display:block;
                    widht: 50%;
                    margin: auto;
                }
            `}</style>
      <div>{children}</div>
    </>
  )
}

export default Layout;