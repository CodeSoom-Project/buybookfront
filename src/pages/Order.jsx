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
        <form>
          구매자정보
          <br />
          <div>이름:</div>
          <div>이메일:</div>
          <div>휴대폰 번호:</div>
        </form>
        <br />
        <form>
          받는사람정보
          <br />
          <div>이름:</div>
          <div>배송주소:</div>
          <div>연락처:</div>
          <div>배송 요청 사항:</div>
        </form>
        <br />
        <div>
          <div>위 사항을 적어서  010-????-####혹은 dladudgn123@naver.com 으로 보내주세요.</div>
          <div>혹은 구글 form 에서 간편하게 작성하실수있습니다</div>
        </div>
        <a href="https://forms.gle/t5SoasM2gjbnyCxo9" target="_blank" rel="noopener noreferrer">간단 하게 구글 form 작성 하러 가기</a>
        <div>
          <div>현재는 무통장 입금 혹은 카카오페이로 받습니다.</div>
          <div>계좌 번호는 보라보라금고 1234567890 입니다</div>
        </div>
      </div>

    </>
  );
}

export default Order;
