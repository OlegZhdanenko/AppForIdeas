import { FC } from "react";
import css from "./SliderItem.module.css"



interface SliderItemProps{
data:{id:number;
      name?: string;
      description?: string;}
      onDelete:(id:number)=>void
    }
  
  
  

const SliderItem:FC<SliderItemProps>=({data,onDelete})=>{
    
return(
   
    <div className={css.container}>
    <div className={css.list}>
    <h2 className={css.name}>{data.name}</h2>
    <button className={css.btn} type="button" onClick={()=>onDelete(data.id)}>Delete Idea</button>
    </div>
    <details className={css.details} >
        <summary className={css.summary}>Viev more...</summary>
        <p className={css.data}>{data.description}</p>
    </details>
    
</div>
)
}
export default SliderItem