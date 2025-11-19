import { RecipeContext } from "@/context/RecipeDataContext"
import { useContext } from "react"

export const useRecipe=()=>{
    const context = useContext(RecipeContext)
    if(!context){
       throw new Error('use recipe must be used inside RecipeProvider')
    }

    return context
}