import styled from "styled-components";

export const SideNavSty = styled.span`
    .navCont{
        height: 100vh;
        width: 16%;
        background-color: #EEF2F3;
        


        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding-left: 20px;

        position: fixed;
        top: 0;
    }
    ul{
        padding: 0;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo h3{
        margin-left: 30px;
    }
    .navCont li{
        list-style: none;
        margin-top: 40px;
        font-weight: 500;
    }
    .accounts li{
        list-style: none;
        margin-top: 30px;
    }
    li:hover{
        color: #3069FC;
    }
    .fa-location-dot{
        font-size: 22px;
    }
    #icon{
        margin-right: 20px;
    }

`