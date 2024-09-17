import css from "./IdeaList.module.css"
import IdeaItems from "../IdeaItems/IdeaItems";
import { useIdeaStore } from "../../Store/IdeaStore";

const IdeaList=()=>{
    
    const {idea ,deleteIdea}=useIdeaStore() 
    return(
        <ul className={css.list}>
            {
                idea?.map((ideas) =>
                    <li key={ideas.id}>
                    <IdeaItems data={ideas} 
                    onDelete={deleteIdea}
                    />
                    </li>)
            }
        </ul>
    )
}
export default IdeaList