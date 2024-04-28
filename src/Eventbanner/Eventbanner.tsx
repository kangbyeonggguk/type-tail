import React, { useState, useEffect } from "react";
const ownlist: string[][] = [
  ["img/slide1.jpg", "img/slidetap1.jpg"],
  ["img/slide2.jpg", "img/slidetap2.jpg"],
  ["img/slide3.jpg", "img/slidetap3.jpg"],
  ["img/slide4.jpg", "img/slidetap4.jpg"],
  ["img/slide5.png", "img/slidetap5.png"],
  ["img/slide6.jpg", "img/slidetap6.jpg"],
];
const Eventbanner = () => {
  const [slideindex, setSlideindex] = useState(0);
  const [stopslide, setStopslide] = useState(false);

  let intervalId: any;
  useEffect(() => {
    intervalId = setInterval(() => {
      if (slideindex < 5 && slideindex >= 0) {
        setSlideindex(slideindex + 1);
      } else {
        setSlideindex(0);
      }
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(intervalId);
  }, [slideindex]);

  const handlePauseResume = () => {
    if (stopslide) {
      // 인터벌이 실행 중이면 일시정지
      clearInterval(intervalId);
      setStopslide(true); // 상태 업데이트
    } else {
      // 인터벌이 일시정지 상태면 재개
      intervalId = setInterval(() => {
        if (slideindex < 5) {
          setSlideindex(slideindex + 1);
        } else {
          setSlideindex(0);
        }
      }, 3000);
      setStopslide(false); // 상태 업데이트
    }
  };

  return (
    <section className="w-full h-[450px] grid place-items-center relative">
      <img
        className=" w-[1920px] absolute top-0 left-[50%] ml-[-960px] object-cover max-w-[1920px]"
        src={ownlist[slideindex][0]}
      />
      <div className="w-[1020px] h-[450px] relative bg-color-red ">
        <ul className="absolute top-[45px] right-[10px] shadow-md list-none">
          {ownlist.map((info, index) => (
            <li key={index} className="list-none">
              <img
                onMouseOver={(event) => {
                  setSlideindex(index);
                }}
                style={{
                  width: "180px",
                  height: "60px",
                  border: slideindex == index ? "2px solid #4285f4" : "none",
                  borderBottom:
                    slideindex == index
                      ? "2px solid #4285f4"
                      : "1px solid #eee",
                }}
                src={info[1]}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Eventbanner;
