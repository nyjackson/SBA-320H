import { useEffect, useState } from "react"
function Information({p, state, dispatch}){
    const id = p.id
    const isCat = p.url.includes("cat")
    const apiUrl = isCat ? `https://api.thecatapi.com/v1/images/${id}` : `https://api.thedogapi.com/v1/images/${id}`
    const [info, setInfo] = useState({})
    const [url, setUrl] = useState()
    useEffect(()=>{
        getInformation()
    },[dispatch])

    async function getInformation(){
        try{
            const connection = await fetch(apiUrl)
            const result = await connection.json()
            console.log(result)
            setInfo(result.breeds[0])
            }
            catch(e){
                console.log(e)
            }
    }
    console.log(info)
    return(
        <div className = "info">
            <h1>Name: {info.name}</h1>
            <p>Temperament: {info.temperament} Life Span: {info.life_span}</p>
        </div>
    )

}
export default Information