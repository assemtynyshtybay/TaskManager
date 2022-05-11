import { styled } from '@mui/material';
import { FC, useState } from 'react'
import { ChildCat } from '../types/categoriesTypes'

type Props = {
  category: ChildCat ,
}
const DropDown = styled('div')`
  padding: 5px;
  color: black;
  list-style-type: none;
  box-shadow: 2px 0px 8px 0px rgba(0,0,0,0.2);
  &:hover {
    .content2 {
      display: block;
    }
  }
`
const DropDownContent = styled('div')`
  display: none;
  margin-left: 200px;
  position: relative;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  
`
export const ChildCategory:FC<Props> = ({category}) => {
  return(
    <DropDown>
      <li>{category.name}</li>
    </DropDown>
  )
}