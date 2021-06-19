import styled from "styled-components";

const IndexWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  a{
    text-decoration: none;
  }
  .fixed {
    display: block;
    opacity: 0.98;
    padding: 20px;
    flex-basis: 20%;
    position: fixed;
    z-index: 200;
    top: 0px;
    left: 0px;
    width: 200px;
    background: #000000;
    height: 100%;
    font-size: 14px;
    &.show{
      @media(max-width: 767px){        
        display: none;
      }
    }
    .logo{
      max-width: 100%;
      height: auto;
    }
    @media(max-width: 767px){      
      width: calc(100% - 40px);     
    }
  }
  .content {
    flex-basis: 80%;
    padding-left: 220px;
    display: flex;
    justify-content: center;
    @media(max-width: 767px){
      flex-basis: 100%;
      padding-left: 0px;
    }
  }
  .dataContainer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div{
      flex-basis: 30%;
    }
  }
  .pagination{
    width: 100%;
    max-width: 140px;
    margin: auto;
    button{
      border: none;
      background: orange;
      border-radius: 125px;
      text-indent: -9999px;
      width: 15px;
      height: 15px;
      margin: 10px;
      &.active{
        background-color: red;
      }
      &:hover{
        cursor: pointer;
      }
    }
  }
  h1{
    text-align: center;
  }
  .ham{
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 22px;
    z-index: 100;
    &:hover{
      cursor: pointer;
    }
    @media(min-width: 768px){
      display: none;
    }
  }
  .show{
    display: block;
  }
  .hidden{
    display: none;
    @media(max-width: 767px){      
      display: block;    
    }
  }
  .fechar{
    text-align: right;
    font-size: 24px;
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
    }
    @media(min-width: 768px){
      display: none;
    }
  }
`;

export default IndexWrapper;