import { useFetch } from "../hooks/useFetch"
import { GridItem } from "./GridItem"
import PropTypes from "prop-types"

export const GifGrid = ({ category }) => {
  
  const { data, loading } = useFetch(category);
  
  return (
      loading ? (<p>Cargando</p>) : 
      (
        <div className="animate__animated animate__fadeIn">
          <h1 className="text-3xl my-5 font-bold">{category}</h1>
          <div className="flex flex-wrap justify-center gap-5">
            {
              data.map(gif => (
                <GridItem key={gif.id} url={gif.url} title={gif.title}/>
              ))    
            }
          </div>
        </div>
      )
    
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}