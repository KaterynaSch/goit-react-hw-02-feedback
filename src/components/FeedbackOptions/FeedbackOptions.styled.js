import styled from "styled-components";

export const BtnWrapper = styled.div`   
    display: flex;
    justify-content: center;    
    gap: 15px;
`
export const FeedbackBtn = styled.button`
    font-size: 12px;
    padding: 6px;
    min-width: 64px; 
    border: none;
    border-radius: 25px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);   
    color: white;
    background-color: #4d5ae5;    
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {    
        background-color: #404bbf;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    }
`