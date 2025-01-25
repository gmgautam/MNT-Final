import Card from "./Card/card"
import data from "../../DATA/cardData"
import { useEffect } from "react"
const CardList=()=>{
   
    return(
        <div>
            {data.map((el)=>{
                return(
                    <div>
                        <Card  data={el}/>
                    </div>
                )
            })}
        </div>
    )
}
export default CardList