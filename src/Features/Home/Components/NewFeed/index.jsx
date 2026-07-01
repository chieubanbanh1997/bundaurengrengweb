import React, { useEffect, useState } from "react";

export default function NewFeed() {
  const [newFeed, setnewFeed] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      if (newFeed < 4) {
        setnewFeed(newFeed + 1);
      } else {
        setnewFeed(1);
      }
    }, 1000);
  }, [newFeed]);

  return (
    <div className="flex justify-center bg-[#fffceb] overflow-hidden relative">
      <img
        src="/images/home/feed-bg-1.png"
        className="absolute md:w-auto w-[30%] top-[-40px] left-[6%]"
        alt="bg"
      />
      <img
        src="/images/home/feed-bg-2.png"
        className="absolute md:w-auto w-[30%] bottom-[6%] right-[10%]"
        alt="bg"
      />
      <img
        src="/images/home/feed-bg-3.png"
        className="absolute md:w-auto w-[30%] top-[40%] left-[15%]"
        alt="bg"
      />
      <img
        src="/images/home/feed-bg-4.png"
        className="absolute md:w-auto w-[30%] top-[25%] right-[5%]"
        alt="bg"
      />
      <div className="container px-8 flex items-center flex-col z-10 pb-16">
        <h3 className="text-[20px] text-center md:text-[48px] font-LHanoienne pt-[40px]">
          BÚN ĐẬU RENG RENG - NGON TRÒN VỊ
        </h3>
        <div className="pt-4 pb-4 relative">
          <img
            src={`/images/home/feed${newFeed}.png`}
            alt="bún đậu reng reng"
          />
          <img
            className="absolute bottom-0 md:bottom-[-15px] right-[-10%] w-[35%] md:w-auto animate-rotasm"
            src="/images/home/feed-icon.png"
            alt="icons"
          />
        </div>
        <div className="pt-5 flex flex-col">
          <div className="grid grid-cols-2 gap-[30px]">
            <p className="font-Montser col-span-2 lg:col-span-1 lg:max-w-[500px] items-center text-[15px]">
              <span className="md:mr-[40px] mr-[20px]"> </span> Bún đậu mắm tôm
              là món ăn đơn giản, dân dã trong ẩm thực và in đậm dấu ấn trong
              cuộc sống thường nhật miền Bắc Việt Nam. Không phải cao lương mỹ
              vị cao sang hay là những thứ quý giá đắt tiền, vị thơm đậm đà, đặc
              trưng của mắm tôm, giòn giòn của đậu rán, mùi cốm thơm ngát phảng
              phất hương thơm của lá sen trong từng miếng chả cốm, các nguyên
              liệu rất đơn giản nhưng lại hấp dẫn các bạn ngay ở những miếng đầu
              tiên. Nếu như thời xưa miếng trầu là đầu câu chuyện, thì hiện nay
              ngồi quây quần xung quanh mẹt bún sẽ là nơi gắn kết mọi người lại
              với nhau. Cùng nhau ngồi quây quần bên mẹt bún đậu tròn, cùng trò
              chuyện rôm rả, chia sẻ về ngày hôm nay thế nào,... cùng nhắm miếng
              bún, miếng đậu, chấm cùng với chén mắm tôm thơm lừng.
              <br />
              <span className="md:mr-[40px] mr-[20px]"> </span> Đến với Bún đậu
              Reng Reng các bạn sẽ được thưởng thức món bún đậu mắm tôm ngon
              đúng điệu Hà Nội.
            </p>
            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
              <img src="/images/home/feed-img1.png" alt="feed" />
            </div>
          </div>
          <div className="pt-[20px] pb-[30px]">
            <img className="" src="/images/home/feed-img2.png" alt="feed" />
          </div>
        </div>
      </div>
    </div>
  );
}
