import { Search } from "./Filter.styled"

export const Filter=({value, onChange})=>{
    return(
        <Search type="text" placeholder="FILTER: ALL" value={value} onChange={onChange}/>
    )
}