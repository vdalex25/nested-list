import styled from "styled-components";

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
  &:after {
    clear: both;
  }
  
  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }
  
  @media (min-width: 1200px) {
    width: 1170px;
  }    
`
export const Title = styled.h1`
  color: #ff691e;
`