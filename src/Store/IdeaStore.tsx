import  {create  } from "zustand";
import { Values } from "../component/IdeaForm/IdeaForm";
import { persist, createJSONStorage} from 'zustand/middleware'

interface Idea {
     id:number;
     name?: string;
     description?: string;
  }


interface IdeaState{
    idea:Idea[]
  addIdea:(data:Values)=>void
  deleteIdea:(id:number)=>void
}


export const useIdeaStore = create<IdeaState>()(
  persist<IdeaState>(
  (set) => ({
       idea :[],
        addIdea: (values) => set((state) => ({idea:[
            ...state.idea,
            { id: Date.now(), ...values },
        ]})),
        deleteIdea: (id) => set((state) => 
            ({idea: state.idea.filter((item)=>item.id !==id)}))
        ,
       
  }),
  {
    name: 'idea-storage',
    storage: createJSONStorage(() => localStorage), 
  }));