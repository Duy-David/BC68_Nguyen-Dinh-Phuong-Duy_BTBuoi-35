import React from "react";
import seatSlice, { bookSeat } from "../../redux/seatSlice";
import { useDispatch, useSelector } from "react-redux";
// import seatSlice from "../../redux/seatSlice";
const Screen = () => {
  console.log(seatSlice)  

  const { arrGhe, gheDangDat } = useSelector((state) => state.seatSlice);
  console.log(arrGhe)
  
  const dispatch = useDispatch();
  const handleGhe = (ghe) => {
    dispatch(bookSeat(ghe));
  };
  const total = gheDangDat.reduce((sum, ghe) => sum + ghe.gia, 0)
  return (
    <div className="Screen ">
      <div className="screen-title">
        <h1 className=" m-8">Đặt vé xem phim tại Cyberlearn</h1>
        <p className="screen text-center text-3xl"> Màn Hình</p>
      </div>
      <div className="screen-seat">
        <div className="screen-container">
          {arrGhe.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row rowNumber">
              <div className=" firstChar">{row.hang}</div>
              {row.danhSachGhe.map((seat, seatIndex) => (
                <div
                  key={seatIndex}
                  // className={`grid-cell gh ${
                  //   seat.daDat ? "gheDangChon" : "gheDuocChon"
                  // }`}
                  className={`ghe ${seat.daDat ? "gheDuocChon" : ""} `}
                >
                  {seat.soGhe}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen;
