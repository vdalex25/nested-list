import styled from "styled-components";

export const List = styled.ul`
  padding: 0.1em 0;
  list-style: none;
  margin: 0;
`
export const ListItem = styled.li<{ margin: number }>`
    margin-left: ${props => props.margin * 30}px
`
export const ItemContent = styled.div`
  clear: both;
  line-height: 1.5;
  position: relative;
  margin: 10px 0 0;
`
export const Branch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 15%);
  border-radius: 3px;
  min-height: 64px;
  max-width: 450px;
  width: 100%;
  position: relative;
  padding: 10px 15px;
  height: auto;
  gap: 12px;
  line-height: 3;
  overflow: hidden;
  word-wrap: break-word;
  color:#565656;
`
export const BranchPath = styled.div<{ height: number }>`
  display: block;
  position: absolute;
  width: 30px;
  height: ${props => props.height * 78}px;
  bottom: 50%;
  left: -15px;
  border: 2px solid #ff691e;
  border-top: 0;
  border-right: 0;
  padding: 4px 0 0;
  padding-top: 3px;
  border-bottom-left-radius: 6px;
  z-index: -1;
`
export const BranchText = styled.div`
  line-height: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
export const BranchButtons = styled.div`
  min-width: 66px;
  text-align: end;
`
export const Button = styled.button`
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  padding: 0px;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  
  &:hover{
    transform: scale(1.2);
  }
`