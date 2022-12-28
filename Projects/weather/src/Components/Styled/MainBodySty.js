import styled from "styled-components";

export const MainBodySty = styled.main`
    margin-left: 16%;
    max-width: 60%;

    #redirect{
        font-size: 13px;
    }

    .mainContainer{
        margin: auto 30px;
    }

    .mainTop{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #search{
        border: none;
        width: 300px;
        height: 30px;

        font-size: 20px;

        background-color: transparent;
    }
    input:focus{
        outline: none;
    }
    .search{
        display: flex;
        align-items: center;
        border: 1.5px solid black;
        border-radius: 10px;
        padding: 5px;
        
    }
    .search i{
        font-size: 20px;
        margin: 0 10px;
    }

    #saveBtn{
        width: 70px;
        font-weight: 600;
        padding: 10px;
        background-color: #92f0a2;
        border: 1.5px solid black;
        border-radius: 5px;
        cursor: pointer;
    }

    #notify , #profile{
        margin-left: 30px;
        font-size: 20px;
    }
    .overViewTop{
        display: flex;
        justify-content: space-between;
    }

    .overviewDetail{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
    }

    .windSpeed , .rainChance, .humidity , .uvIndex{
        width: 40%;
        height: 100px;
        /* background-color: #FCFCFC; */
        background-color: #EEF2F3;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }

    i {
        font-size: 40px;
    }
`