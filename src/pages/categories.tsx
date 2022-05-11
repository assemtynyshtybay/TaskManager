import styled from "@emotion/styled";
import { Container, Grid, CircularProgress} from "@mui/material";
import { useEffect } from 'react';
import { ChildCategory } from "../components/ChildCategories";
import { ProductItem } from "../components/ProductItem";
import { useCategActions } from "../hooks/shoHooks/useCategoriesActionCreator";
import { useProductActions } from "../hooks/shoHooks/useProductsAction";
import { useTypedSelector } from '../hooks/useTypedSelector';
const Category = styled('div')`
  color: black;
  width: 200px;
`
const DropDown = styled('div')`
  padding: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  display: inline-block;
  &:hover {
    .content1 {
      display: inline-block;
      position: absolute;
      top: 0px;
    }
  }
`
const DropDownContent = styled('div')`
  display: none;
  left: 210px;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  
`
const Categories = () => {
  const {data, loading} = useTypedSelector((state) => state.categ)
  console.log('cat', data);
  const {fetchCateg} = useCategActions();
  useEffect(() => {
      fetchCateg()
    }, [fetchCateg])
    if (loading) {
        return (
          <CircularProgress />
        )
    }
  return(
    <div style={{position:"relative"}}>
      {data && data.map((item) => (
          <DropDown>
            <Category>
              {item.name}
            </Category>
            <DropDownContent className='content1'>
              {item.childCategories && item.childCategories.map((category)=>(
                <ChildCategory key={category.id} category={category}/>
              ))
              }
            </DropDownContent>
          </DropDown>
        ))
      }
    </div>
  )

}
export default Categories;