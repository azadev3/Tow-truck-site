import React, { SetStateAction } from 'react'

type ImageModalContextType = {
     imgModal: number | null,
     setImgModal: React.Dispatch<SetStateAction<number | null>>;
}

type ChildType = {
     children: React.ReactNode
}

export const ImageModalContext = React.createContext<ImageModalContextType | undefined>(undefined);

export const ImageModalContextProvider:React.FC<ChildType> = ({children}) => {

     const [imgModal, setImgModal] = React.useState<number | null>(null);

     return (
          <ImageModalContext.Provider value={{
               imgModal, setImgModal
          }}>
               {children}
          </ImageModalContext.Provider>
     )
}

export const useImageModal = () => {
     const context = React.useContext(ImageModalContext);

     if(context === undefined) {
          throw new Error('undefined ImageModalContext');
     } else {
          return context;
     }
}