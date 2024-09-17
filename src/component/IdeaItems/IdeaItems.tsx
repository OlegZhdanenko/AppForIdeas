import { FC } from "react";
import css from "./IdeaItems.module.css"



interface IdeaItemsProps{
data:{id:number;
      name?: string;
      description?: string;}
      onDelete:(id:number)=>void
    }
  
  
  

const IdeaItems:FC<IdeaItemsProps>=({data,onDelete})=>{
    
return(
    <div className={css.container}>
    <div className={css.list}>
    <h2 className={css.name}>{data.name}</h2>
    <button className={css.btn} type="button" onClick={()=>onDelete(data.id)}>Delete Idea</button>
    </div>
        <p className={css.data}>{data.description}</p>
</div>
)
}
export default IdeaItems