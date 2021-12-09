import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    color: ${props => props.theme.colors.whitefontcolor};
    width: 100vw;
    height: 100vh;
`

export const Introduction = () => {
    return (
        <Wrapper>
            <p>TESt</p>
        </Wrapper>
    )
}
