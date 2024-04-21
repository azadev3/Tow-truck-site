import React, { SetStateAction } from 'react'

type ToggleMenuContextType = {
     toggleMenu: boolean,
     setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
}

type ChildrenType = {
     children: React.ReactNode,
}

export const ToggleMenuContext = React.createContext<ToggleMenuContextType | undefined>(undefined);

export const ToggleMenuContextProvider:React.FC<ChildrenType> = ({children}) => {

     const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);

     return (
          <ToggleMenuContext.Provider value={{toggleMenu, setToggleMenu}}>
               {children}
          </ToggleMenuContext.Provider>
     )
}

export const useToggleMenuContext = ( ) => {
     const context = React.useContext(ToggleMenuContext);

     if(context === undefined) {
          throw new Error('undefined togglemnu contxt');
     } else {
          return context
     }
}