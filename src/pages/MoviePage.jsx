import {fetchBySerch} from '../services/fetchApi'
export const MoviePage = () => {
    fetchBySerch()
    .then(console.log)

    return (
        <>
        <form action="">
          
                <input type="s"  name="serch"
      autoComplete="off"
      autoFocus
      placeholder="Look for your movie here"/>
             <button type="submit"/>
           
        </form>
        </>
    )
}