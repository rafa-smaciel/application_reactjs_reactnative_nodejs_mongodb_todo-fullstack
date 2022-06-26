import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap; //um debaixo do outro em uma eventual redução da tela
    justify-content: space-around;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }
`