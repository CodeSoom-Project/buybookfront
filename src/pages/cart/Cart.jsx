import styled from '@emotion/styled';

const CartContainer = styled.div`
  padding: 2rem 4rem;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  h2 {
    font-weight: 400;
    font-size: 1.9em;
    text-align: center;
  }
`;

const Titles = styled.div`
  margin: 2rem 0 1rem 0;
  h3: {
    font-size: 0.875em;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const Cartitem = styled.div`
  border-top: 1px solid rgb(187,197,187);
  padding: 1rem 0;
`;

const ProductTitle = styled.h2`
  padding-left: 0.5rem;
`;

const Price = styled.h2`

`;

const Quantity = styled.h2`
  
`;

const Total = styled.h2`
  padding-right: 0.5rem;
  justify-self: right;
`;

const CartProduct = styled.div`
  display: flex;
  img:{
    width: 6.25em;
    max-width: 100%;
    margin-right: 1rem;
  };
  h3: {
    font-weight: 400;
  };
  button: {
    border: none;
    outline: none;
    margin-top: 0.7rem;
    cursor: pointer;
    background: none;
    color: gray;
  };
  button:hover {
    color: black;
  }
`;

const CartProductQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 8em;
  max-width: 100%;
  border: 0.03125em solid rgb(177, 177, 177);
  border-radius: 0.3125em;
  button: {
    border: none;
    outline: none;
    background: none;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
  }
`;

const Count = styled.div`
  padding: 07rem 0;
`;

const CartProductTotalPrice = styled.div`
  justify-self: right;
  padding-right: 0.5rem;
  font-weight: 700;
`;
const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(187,187,187);
  padding-top: 2rem;
`;

const ClearCart = styled.button`
  width : 8.125em;
  max-width:100%;
  height : 2.500em;
  border-radius: 0.313em;
  font-weight: 400;
  letter-spacing: 0.072em;
  border: 0.030em solid rgb(177,177,177);
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
`;

const CartCheckout = styled.div`
  width : 16.875em;
  max-width :100%;
  p: {
    font-size: 0.875em;
    font-weight: 200;
    margin: 0.5rem 0;
  };
`;
const CheckOutButton = styled.button`
    width: 100%;
    height: 2.500em;
    border-radius: 0.313em;
    font-weight: 400;
    border: none; 
    outline: none;
    cursor: pointer;
    background: #4b70e2;
    color: white;
    letter-spacing: 0.072em;
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.250em;
`;

const Amount = styled.span`
  font-weight: 700;
`;

const CartEmpty = styled.div`
  font-size: 20px;
  margin-top:2rem;
  color: rgb(84, 84, 84);
  display : flex;
  flex-direction: column;
  align-items: center;
`;

function Cart({
  cart, onRemove, onDecrease, onIncrease, onClear,
}) {
  return (
    <CartContainer>
      <h2>장바구니</h2>
      { cart.cartItems.length === 0 ? (
        <CartEmpty>
          <p>장바구니가 비었습니다</p>
        </CartEmpty>
      ) : (
        <div>
          <Titles>
            <ProductTitle>상품명</ProductTitle>
            <Price>가격</Price>
            <Quantity>수량</Quantity>
            <Total>총합</Total>
          </Titles>
          <div>
            {cart.cartItems?.map((cartItem) => (
              <Cartitem key={cartItem.id}>
                <CartProduct>
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <button
                      type="button"
                      onClick={() => onRemove(cartItem)}
                    >
                      상품제거
                    </button>
                  </div>
                </CartProduct>
                <div>
                  $
                  {cartItem.price}
                </div>
                <CartProductQuantity>
                  <button
                    type="button"
                    onClick={() => onDecrease(cartItem)}
                  >
                    -
                  </button>
                  <Count>{cartItem.cartQuantity}</Count>
                  <button
                    type="button"
                    onClick={() => onIncrease(cartItem)}
                  >
                    +
                  </button>
                </CartProductQuantity>
                <CartProductTotalPrice>
                  $
                  {cartItem.price * cartItem.cartQuantity}
                </CartProductTotalPrice>
              </Cartitem>
            ))}
          </div>
          <CartSummary>
            <ClearCart
              type="button"
              onClick={() => onClear()}
            >
              장바구니 비우기
            </ClearCart>
            <CartCheckout>
              <Subtotal>
                <span>총 상품가격</span>
                <Amount>
                  $
                  {cart.cartTotalAmount}
                </Amount>
              </Subtotal>
              <p>[주문하기] 버튼을 누르시면 위 장바구니 상품에 대한 주문/결제가 한번에 이루어집니다.</p>
              <CheckOutButton type="button">주문하기</CheckOutButton>
            </CartCheckout>
          </CartSummary>
        </div>
      )}

    </CartContainer>
  );
}

export default Cart;
