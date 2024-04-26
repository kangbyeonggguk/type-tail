import React from "react";

const catelist = [
  [-8, -27, "패션의류/잡화"],
  [-8, -111, "뷰티"],
  [-8, -153, "출산/유아동"],
  [-8, -195, "식품"],
  [-8, -279, "주방용품"],
  [-8, -321, "생활용품"],
  [-8, -363, "홈인테리어"],
  [-8, -405, "가전디지털"],
  [-8, -447, "스포츠/레저"],
  [-8, -783, "자동차용품"],
  [-8, -573, "도서/음반/DVD"],
  [-8, -741, "완구/취미"],
  [-8, -489, "문구/오피스"],
  [-8, -531, "반려동물용품"],
  [-8, -867, "헬스/건강식품"],
  [-8, -615, "여행/티켓"],
  [-8, -909, "테마관"],
];
interface OwnProps {
  downslide: string;
}

const Cateslide: React.FC<OwnProps> = ({ downslide }) => {
  return (
    <ul
      className={`${downslide} border shadow-md  text-[11px] absolute bg-white z-10 top-[217px] left-[154px] pt-[8px] pb-[8px]`}
    >
      {catelist.map((info, index) => (
        <div
          key={index}
          className={`h-[29px] ${index >= 15 ? "mt-[6px]" : "none"}`}
        >
          <a
            className={`w-[165px] text-[12px] pt-[9px] pl-[51px] inline-block ${
              index >= 14 ? "pb-[8px]" : "none"
            }`}
            style={{
              background: `url("//static.coupangcdn.com/image/coupang/common/pc_gnb_icon_ver10.png") 120px 100px no-repeat`,
              backgroundPosition: `-8px ${info[1]}px`,
              borderBottom:
                index === 14 || index === 15 ? "1px solid #ddd" : "none",
            }}
          >
            {info[2]}
          </a>
        </div>
      ))}
    </ul>
  );
};

export default Cateslide;
