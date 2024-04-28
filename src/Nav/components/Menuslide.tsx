import React from "react";
interface OwnProps {
  menuslide: Number;
}

const Menuslide: React.FC<OwnProps> = ({ menuslide }) => {
  console.log(menuslide);
  return (
    <div className="w-[830px] overflow-hidden ">
      <div
        className="w-[1180px] content-center flex flex-row flex-wrap"
        style={{
          transform: `translateX(${menuslide}px)`,
          transition: "0.5s ease",
        }}
      >
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[20px] h-[20px] mr-[2px] object-center"
            src="img/coupangplaylogo.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          쿠팡플레이
        </span>

        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]"
            src="img/rocket.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          로켓배송
        </span>
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]"
            src="img/rocket2.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          로켓프레시
        </span>
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[25px] mr-[2px] ml-[10px] pl-[5px] object-contain"
            src="img/icon.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          가정의 달
        </span>
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[25px] mr-[2px] ml-[10px] pl-[5px] object-contain "
            src="img/biz.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          쿠팡비즈
        </span>
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]"
            src="img/rocket3.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          로켓직구
        </span>
        <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[5px] content-center cursor-pointer">
          골드박스
        </span>
        <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[5px] content-center cursor-pointer">
          와우할인할인
        </span>
        <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[6px] content-center cursor-pointer">
          이벤트/쿠폰
        </span>
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]"
            src="img/market.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          반품마켓
        </span>
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]"
            src="img/shop.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          착한상점
        </span>
        <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[5px] content-center cursor-pointer">
          기획전
        </span>
        <div className="h-[32px] content-center cursor-pointer">
          <img
            className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]"
            src="img/plane.png"
          />
        </div>
        <span className="text-[12px] text-[#333] pr-[8px] content-center cursor-pointer">
          여행/티켓
        </span>
      </div>
    </div>
  );
};

export default Menuslide;
