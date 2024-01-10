import { createContext, useEffect, useState } from "react";

export const PhotoContext = createContext();

export function PhotoProvider({children}){

  const [photoData, setPhotoData] = useState(null)
  
  const PHOTO_URL = "/photos.json";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(PHOTO_URL);
        const data = await res.json();
        setPhotoData(data.photos);
      } catch (error) {
        console.error("Error al obtener los datos");
      } 
    }
    fetchData();
  }, []);


  return(
    <PhotoContext.Provider value={{photoData, setPhotoData}}>
      {children}
    </PhotoContext.Provider>
  )
    
}