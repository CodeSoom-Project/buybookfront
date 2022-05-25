import styled from "@emotion/styled";

const MainWrapper = styled.div({
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  overflowX: '0',
})

const Container = styled.div({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 16px',
})

const ItemList = styled.div({
  margin: '36px 0',
  display: 'grid',
  gridTemplateColumns: '100%',
  rowGap: '32px',
})


const Item = styled.div({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(1, 1fr)',
  backgroundColor: '#ffffff',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '0 0 4px 0 rgba(15, 4, 4, 0.05)',
  transition: 'all 0.2s ease-out',
  hover: {
    boxShadow: '0 0 10px 1px rgba(0, 4, 4, 0.15)'
  }
})

const ItemImg = styled.div({
  position: 'relative',
  overflow: 'hidden',
  img: {
    width: '70%',
    margin: '16px auto',
  }
})

const ItemDetail = styled.div({
  padding: '16px',
  color: '#202020',
  textAlign: 'left',
})

const ItemName = styled.div({
  fontWeight: '500',
  fontSize: '18px',
  color: '#202020',
  display: 'block',
})

const ItemPrice = styled.div({
  margin: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: '#f79410',
  fontSize: '18px',
  fontWeight: '600',
})

const ItemDescription = styled.div({
  fontWeight: '600',
  opacity: '0.9',
  fontSize: '15px',
  lineHeight: '1.7',
  display: 'block',
})

const AddButton = styled.button({
  margin: '16px 0',
  textTransform: 'uppercase',
  backgroundColor: '#202020',
  color: '#ffffff',
  fontFamily: 'inherit',
  padding: '10px 28px',
  border: '1px solid #202020',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',
  display: 'block',
  hover: {
    backgroundColor: '#ffffff',
    color: '#202020',
  }
})


const ProductDetail = ({
                         item: {
                           category,
                           title,
                           image,
                           description,
                           price,
                           rating: {rate},
                         },
                       }) => (
  <MainWrapper>
    <Container>
      <ItemList>
        <Item>
          <ItemImg>
            <img src={image}/>
          </ItemImg>
          <ItemDetail>
            <ItemName>{title}</ItemName>
            <ItemPrice>{price}</ItemPrice>
            <ItemDescription>{description}</ItemDescription>
            <AddButton type="button">장바구니 담기</AddButton>
          </ItemDetail>
        </Item>
      </ItemList>
    </Container>
  </MainWrapper>
)

export default ProductDetail;