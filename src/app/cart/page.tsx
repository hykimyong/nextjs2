import data from'./data';

export default function Cart() {
  const 장바구니 = ['Tomatoes','Pasta'];
    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem 작명={장바구니[0]}/>
        <CartItem 작명={장바구니[1]}/>
        <Banner content="롯데카드"/>
        <Banner content="현대카드"/>
      </div>
    )
}
interface BannerNameProps{
  content: string;
}
function Banner(props:BannerNameProps) {
  return <h5>{props.content} 결제 행사중</h5>
}

interface CartItemProps {
  작명: string;
}
function CartItem(props:CartItemProps){
    return(
        <div className="cart-item">
          <p>상품명 {props.작명}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
}