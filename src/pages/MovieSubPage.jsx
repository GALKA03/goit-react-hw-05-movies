import { UseFectcMovie } from "../hooks/UseFectcMovie";
export const MovieSubPage = () => {
    const movie = UseFectcMovie()   
   console.log('movie',movie) 
    return (
        <div>
MovieSubPage 
        </div>
    )
}