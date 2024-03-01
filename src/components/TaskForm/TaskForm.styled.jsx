import styled from "styled-components";

export const TextArea = styled.textarea`
    resize: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    border: none;
    padding: 10px;
    width: 25%;
    height: 200px;
    &:focus{
        outline: none;
    }
`
export const Btn = styled.button`
    padding: 20px;
    background: #7ac8f6;
    color: white;
    border: none;
    border-radius: 20px;
    font-weight: 800;
    margin-left: -50px;
    background-color: #2199fa;
`