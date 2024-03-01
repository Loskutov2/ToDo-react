import { Component } from "react";
import { StyledBtn } from "./Button.styled";

export const Button=({onClick=()=>null, children=null})=>{
        return(
            <StyledBtn type='button' onClick={onClick}>
                {children}
            </StyledBtn>
        )
}