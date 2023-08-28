import React, {useEffect, useState} from "react"
import "./List.css"
import Cards from "../Cards/Cards"


function List(){
  const [movieList, setMovieList] = useState([])
  const [nameSearch, setNameSearch] = useState('')
  const[pageNumber, setPageNumber] = useState(1)
  const[numberPages, setNumberPages]=useState(0)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3b4695ba5913340c50326e95da463ec9&query=${nameSearch}&page=${pageNumber}`)
    .then(res => res.json())
    .then(data => {
      setMovieList(data.results)
      setNumberPages(data.total_pages)})    
  }, [nameSearch, pageNumber])

  function handleChangeInput({target}){
    let p = target.value.toLowerCase();
    setNameSearch(p);
    setPageNumber(1);
  }

 function handleNextPage(){
  if (pageNumber < numberPages) setPageNumber( pageNumber+ 1)
 }

 function handleLastPage(){
  if (pageNumber > 0) setPageNumber( pageNumber - 1)
 }



  return (
      <div id="list">
        <div className="row my-4">
        <h2  className="col" id="Title">Popular</h2> 
          <div className="mb-3 col">
            <label  className="form-label">Buscar por nombre</label>
            <input type="text"  className="form-control"  placeholder="Civil War" value={nameSearch} onChange={handleChangeInput}/>
          </div>
        </div>
          <div id="cards">
              {
                  movieList.map(movie => (
                    <Cards key={movie.id} {...movie}/>
                  ))
              }
          </div>
          <div className="text-center">
<div className="row">
  <button type="button" className="btn btn-info m-3 col" onClick={handleLastPage}>Last Page</button>
  <div className="bg-warning col-1 p-2" id="number">{pageNumber}</div>
  <button type="button" className="btn btn-info m-3 col" onClick={handleNextPage}>Next Page</button>
</div>
          </div>
          
      </div>
  )
}

export default List