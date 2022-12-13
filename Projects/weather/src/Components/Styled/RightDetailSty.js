import styled from "styled-components";

export const RightDetailSty = styled.aside`
    position: fixed;
    top: 0;
    margin-left:75% ;
    width: 25%;
    height: 100vh;
    background-color: #152E4C;
    color: white;
    font-family: 'Poppins', sans-serif;

    .cityName h3{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 50px;
        margin: 0;
    }

    .cityName h6{
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 20px;
        margin: 0;

        margin-bottom: 30px;
    }

    .rightCont{
        padding: 10px;
    }

    .rightTop{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #tempIcn{
        font-size: 35px;
    }

    .temp{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    .temp h6{
        margin-top: 0px;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 400px;
    }

    .temp h3 {
        margin-top: 0;
        /* font-family: 'Poppins', sans-serif; */
        font-size: 30px;
        font-weight: 100px;
    }
`