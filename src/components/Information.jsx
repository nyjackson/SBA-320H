import { useEffect} from "react"
function Information({p, dispatch, info}){
    useEffect(()=>{
        getInformation()
        
    },[dispatch])

    async function getInformation(){
        try{
            const isCat = p.url.includes("cat")
            const apiUrl = isCat ? `https://api.thecatapi.com/v1/images/${p.id}` : `https://api.thedogapi.com/v1/images/${p.id}`
            const connection = await fetch(apiUrl)
            const result = await connection.json()
            
            const animalInfo = result.breeds?.[0] || {}
            dispatch({type: "INFO", payload: {...animalInfo, id: p.id}})
            }
            catch(e){
                console.log(e)
            }
    }
    return(
        <div className = "info">
            <h1>Name: {info?.name || "N/A"}</h1>
            <p>Temperament: {info?.temperament || "N/A"} <br></br>Life Span: {info?.life_span || "N/A"}<br></br>Origin: {info?.origin || "N/A"}</p>
        </div>
    )

}
export default Information