import React, { useState } from "react";
import { Link } from "react-router-dom";
import Downmenu from "./components/Downmenu";

const Nav = () => {
  const [downmenu, setDownmenu] = useState("hidden"); //입점신청 다운탭 상태
  const [advertisingstate, setAdvertisingstate] = useState("block"); //광고 상태
  return (
    <nav className="w-full grid place-items-center relative">
      <div className={`${advertisingstate} flex flex-row`}>
        {" "}
        {/* 광고 창*/}
        <div className="flex flex-row">
          <Link to="/">
            <img src="/img/advertising.jpg" />
          </Link>
          <Link to="/">
            <img src="/img/advertising2.jpg" />
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className={`${advertisingstate} absolute right-10 top-0`}
        onClick={() => setAdvertisingstate("hidden")}
      >
        x
      </Link>
      <div className="w-full bg-loginbg h-[32px] content-center grid place-items-center">
        <div className="w-[1020px] flex flex-row justify-between text-[11px] ">
          <div>
            <Link to="/" className="pt-[10px] pl-[12px]">
              즐겨찾기
            </Link>
            <Link
              to="/"
              className="pt-[10px] pl-[12px] relative"
              onMouseOver={() => setDownmenu("block")}
              onMouseOut={() => setDownmenu("hidden")}
            >
              입점신청 ▼
              <Downmenu
                downmenu={downmenu}
                menus={["오픈마켓", "여행.티켓", "로켓배송", "제휴마케팅"]}
                top={"2rem"}
                left={"-1rem"}
              />
            </Link>
          </div>
          <div>
            <Link to="/" className="pt-[10px] pl-[12px]">
              로그인
            </Link>
            <Link to="/" className="pt-[10px] pl-[12px]">
              회원가입
            </Link>
            <Link to="/" className="pt-[10px] pl-[12px]">
              고객센터
            </Link>
          </div>
        </div>
      </div>
      {/*입점신청 다운탭 */}

      <div>
        <div className="flex flex-row">
          <div className="w-[110px] h-[115px] bg-blue-500 flex flex-col justify-center cursor-default mr-[30px]">
            <span className="material-symbols-outlined text-white text-[50px] text-center">
              menu
            </span>
            <p className="text-white text-[13px] text-center">카테고리</p>
          </div>
          <div className="mt-[25px]">{/*로고, 검색창, 마이쿠팡, 장바구니*/}
            <div className="flex flex-row">
              <img className="w-[174px] h-[41px] max-w-max mr-[20px]" src="img/logo.png" />{/*로고*/}
              <div className="w-[522px] h-[42px] mr-[22px] border-[2px] border-blue-500 relative">{/*검색창*/}
                <div className="w-[135px] h-[38px] absolute top-0 left-0 border-r-[1px] ">
                  <a className="w-[110px] h-[38px] leading-[38px] inline-block absolute top-0 left-0 text-[12px] text-[#555] indent-[10px]" href="#">전체</a>
                  <a className="w-[30px] h-[30px] absolute top-[10px] right-0 text-[#555] text-[12px] text-center align-center" href="#">▼</a>

                </div>
                <div>
                  <input className="w-[327px] h-[38px] text-[#333] text-[14px] pr-[23px] absolute top-0 left-[135px] indent-[10px] outline-none" placeholder="찾고 싶은 상품을 검색해보세요!"></input>
                  <a className="w-[26px] h-[26px] inline-block absolute top-[5px] right-[48px] indent-[-99px] bg-[url('//img1a.coupangcdn.com/image/coupang/common/ic_mic.png')] bg-no-repeat bg-[length:20px_48px]" />
                  <span className="w-[50px] h-[38px] leading-[38px] material-symbols-outlined text-blue-500 absolute right-0 text-center">
                    search
                  </span>
                </div>
              </div>
              <div >{/*마이쿠팡*/}
                <div className="w-[44px] flex justify-center content-center mr-[20px]">
                  <img className="w-[30px] h-[30px]" src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#person" />
                </div>
                <span className="text-[12px] leading-[15px] mr-[20px]">마이쿠팡</span>
              </div>
              <div >{/*장바구니*/}
                <div className="w-[44px] flex justify-center content-center">
                  <img className="w-[30px] h-[30px]" src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#cart" />
                </div>
                <span className="text-[12px] leading-[15px]">장바구니</span>
              </div>
            </div>
            <div className="w-[880px]  flex flex-row relative top-[-1px] left-[-22px]">
              <img className="w-[20px] h-[32px] object-contain object-center" src="//img1a.coupangcdn.com/image/coupang/common/pc_gnb_arrow-left-gray@2x.png" />
              <div className="flex flex-row content-center flex-wrap pr-[5px]">{/*쿠팡 플레이 외 메뉴*/}
                <div className="content-center flex flex-row flex-wrap">
                  <div className="h-[32px] content-center"><img className="w-[20px] h-[20px] mr-[2px] object-center" src="img/coupangplaylogo.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">쿠팡플레이</span>

                  <div className="h-[32px] content-center"><img className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]" src="img/rocket.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">로켓배송</span>
                  <div className="h-[32px] content-center"><img className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]" src="img/rocket2.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">로켓프레시</span>
                  <div className="h-[32px] content-center"><img className="w-[25px] h-[25px] mr-[2px] ml-[10px] pl-[5px] object-contain" src="img/icon.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">가정의 달</span>
                  <div className="h-[32px] content-center"><img className="w-[25px] h-[25px] mr-[2px] ml-[10px] pl-[5px] object-contain " src="img/biz.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">쿠팡비즈</span>
                  <div className="h-[32px] content-center"><img className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]" src="img/rocket3.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">로켓직구</span>
                  <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[5px] content-center">골드박스</span>
                  <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[5px] content-center">와우할인할인</span>
                  <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[5px] content-center">이벤트/쿠폰</span>
                  <div className="h-[32px] content-center"><img className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]" src="img/market.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">반품마켓</span>
                  <div className="h-[32px] content-center"><img className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]" src="img/shop.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">착한상점</span>
                  <span className="ml-[10px] pl-[5px] text-[12px] text-[#333] pr-[5px] content-center">기획전</span>
                  <div className="h-[32px] content-center"><img className="w-[25px] h-[20px] mr-[2px] ml-[10px] pl-[5px]" src="img/plane.png" /></div>
                  <span className="text-[12px] text-[#333] pr-[5px] content-center">여행/티켓</span>
                </div>
              </div>
              <img className="w-[20px] h-[32px] object-contain" src="//img1a.coupangcdn.com/image/coupang/common/pc_gnb_arrow-right@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
