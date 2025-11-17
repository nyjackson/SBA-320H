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
            console.log(apiUrl)
            console.log("Getting Information", result.breeds[0])
            //setInfo(result.breeds[0])
            dispatch({type: "INFO", payload: result.breeds[0]})
            }
            catch(e){
                console.log(e)
            }
    }
    console.log("p", JSON.stringify(info))
    return(
        <div className = "info">
            <h1>Name: {info.name}</h1>
            <p>Temperament: {info.temperament} <br></br>Life Span: {info.life_span}<br></br>Origin: {info.origin}</p>
        </div>
    )

}
export default Information