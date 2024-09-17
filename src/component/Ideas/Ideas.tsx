import IdeaForm from "../IdeaForm/IdeaForm";
import IdeaList from "../IdeaList/IdeaList";
import { useIdeaStore } from "../../Store/IdeaStore";
import IdeaSlider from "../Slider/Slider";



export default function Ideas() {
const {idea,addIdea}=useIdeaStore()


    return (
        <div>
            {!(idea.length>0) && <h1>Write down your first idea.
                Maybe this is something genius...</h1>} 
            <IdeaForm onAdd={addIdea}  />
            {/* <SearchBox /> */}
            <IdeaList/>
            <IdeaSlider/>
    </div>
)}