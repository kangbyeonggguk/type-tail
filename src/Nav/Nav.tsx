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
      <div className="w-full bg-loginbg h-9 content-center grid place-items-center">
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
                top={"2.2rem"}
                left={"1rem"}
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
          <div className="w-[110px] h-[115px] bg-blue-500 flex flex-col justify-center cursor-default">
            <span className="material-symbols-outlined text-white text-[50px] text-center">
              menu
            </span>
            <p className="text-white text-[13px] text-center">카테고리</p>
          </div>
          <div className="w-[110px] h-[115px] bg-red-500">
            <div className="w-[110px] h-[57px]">쿠팡</div>
            <div className="w-[110px] h-[59px]">쿠팡플레이</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
