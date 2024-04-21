import React from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = ({children}:{children:any}) => {

     const location = useLocation();
     React.useEffect(() => {
          if(!location.hash) {
               window.scrollTo(0, 0);
          }
     }, [location]);

     return (
          <>
               {children}
          </>
     )
}