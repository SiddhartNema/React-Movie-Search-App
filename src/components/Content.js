import React from "react";
const Content = (movie)=>{
    return (
        <div className="container" >
            {movie.Response !== 'False' ? (
            <div className="contentw" >
                <img src="movie.Poster" alt="" className="contenti" />
                <div className="content" >
                <h2 className="title" >{movie.Title}</h2>
                <small>by {movie.Writter}</small>
                <h3 className="stitle" > Movies Details </h3>
                <div className="detailsf" >
                    <h4>Plot:</h4>
                    <p  >{ movie.Plot } </p>
                    
                    <div className="linec" >
                        <h4>Actors</h4>
                        <p>{movie.Actors}</p>

                    </div>

                    <div className="linec" >
                        <h4>Director</h4>
                        <p>{movie.Director}</p>

                    </div>

                    <div className="linec" >
                        <h4>Actors</h4>
                        <p>{movie.Language}</p>

                    </div>

                    <div className="linec" >
                        <h4>Runtime</h4>
                        <p>{movie.Runtime}</p>

                    </div>

                    <div className="linec" >
                        <h4>Released</h4>
                        <p>{movie.Released}</p>

                    </div>
                </div>

                </div>
                

            </div>


        

    ):(
        <div className="container" >
        <h4>not exists</h4>
        </div>
    )}
    </div>
    )
}
export default Content