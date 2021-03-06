import styled from 'styled-components'


export const HomeIcon = styled.img`
    width: 25px;
    height: 25px;
`

export const FormWrapper = styled.div`
    height: 93vh;
    /* position:; */
    /* overflow-wrap:auto; */
    button{
        background-color:#3F729B;
    }
    button:hover{
        background-color:#1C2331;
    }
    p{
        opacity:0.7;
        margin-left:11.5px;
    }
`

export const Mlabel = styled.label`
    @media only screen and (max-width: 600px) {
        font-size:12px;
    }
`

export const CenterContainer = styled.div`
    display:grid;
    place-items:center;
`


export const CustomNavBar = styled.nav`
    background-color:#3F729B;
    padding:4px 10px;
    a{
        color: white;
        text-decoration:none;
        font-weight:600;
    }
`

export const SideNav = styled.div`
    position:fixed;
    height: 100vh;
    z-index: 1;
    padding:0;
    @media only screen and (min-width: 1024px) {
        background-color:rgb(39, 43, 44);
    }
    >div:first-child{
        background-color:rgb(39, 43, 44);

    }
`

export const InfoBar = styled.div`
    /* height:100vh; */
`

export const RoundedDiv = styled.div`
    border-radius:15px; 
    >div:first-child{
        canvas{
            height: 400px;
        }
    }
`