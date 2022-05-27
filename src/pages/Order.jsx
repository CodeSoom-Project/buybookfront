function Order({
  item: {
    title,
    price,
  },
}) {
  return (
    <>
      <div>
        <div>{title}</div>
        <div>
          {price}
          달러
        </div>
      </div>
      <br />
      <div>
        <div>
          구매자정보
          <br />
          <div>이름:</div>
          <div>이메일:</div>
          <div>휴대폰 번호:</div>
        </div>
        <br />
        <div>
          받는사람정보
          <br />
          <div>이름:</div>
          <div>배송주소:</div>
          <div>연락처:</div>
          <div>배송 요청 사항:</div>
        </div>
        <br />
        <div>
          <div>위 사항을 적어서  010-????-####혹은 dladudgn123@naver.com 으로 보내주세요.</div>
          <div>현재는 무통장 입금 혹은 카카오페이로 받습니다.</div>
          <div>계좌 번호는 보라보라금고 1234567890 입니다</div>
        </div>
      </div>

    </>
  );
}

export default Order;