import { useEffect, useState } from "react"
function Information({p, state, dispatch}){
    const id = p.id
    const isCat = p.url.includes("cat")
    const apiUrl = isCat ? `https://api.thecatapi.com/v1/images/${id}` : `https://api.thedogapi.com/v1/images/${id}`
    const [info, setInfo] = useState({})
    useEffect(()=>{
        getInformation()
    },[dispatch])

    async function getInformation(){
        try{
            const connection = await fetch(apiUrl)
            const result = await connection.json()
            console.log(result.breeds)
            setInfo(result.breeds[0])
            }
            catch(e){
                console.log(e)
            }
    }
    console.log(info)
    return(
        <div class = "info">
            <h1>Name:</h1>
        </div>
    )

}
export default Information