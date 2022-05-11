import { Container, Grid, CircularProgress} from "@mui/material";
import { useEffect } from 'react';
import { ProductItem } from "../components/ProductItem";
import { useProductActions } from "../hooks/shoHooks/useProductsAction";
import { useTypedSelector } from '../hooks/useTypedSelector';

const Shop = () => {
  const {data, loading} = useTypedSelector((state) => state.shop)
  console.log('s',data)
  const {fetchProducts} = useProductActions();
  useEffect(() => {
      fetchProducts()
    }, [fetchProducts])
    if (loading) {
        return (
          <CircularProgress />
        )
    }
  return(
    <Container>
      {/* {
        isLoad
        ?
        <CircularProgress />
        :
        (
        <> */}
          <Grid container spacing={2} columns={{xs: 3, md: 6, lg: 12}}>
          {data && data.map((item) => (
            <Grid item xs={3} key={item.id}>
              <ProductItem product={item}/>
            </Grid>
            ))
          }
          </Grid>
          {/* <Basket />
          { basket.length>0 && <OrderModal/> }
        </>)
      } */}
      
      
    </Container>
  )

}
export default Shop;