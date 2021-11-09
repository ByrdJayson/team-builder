import React from 'react';
import styled from 'styled-components';


export default function Member(props){

    const StyledMember = styled.div`
        border: 3px solid black;
        margin-top: 2rem;
        
        
    `

    const { name, email, role } = props.member;

    return (
        <StyledMember className='member-div'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{role}</p> 
        </StyledMember>
    )  
       
        
}
