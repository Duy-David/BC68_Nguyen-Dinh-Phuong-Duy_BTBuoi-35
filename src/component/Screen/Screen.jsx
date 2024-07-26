import React from "react";
import seatSlice, { bookSeat } from "../../redux/seatSlice";
import Summary from "../Summary/Summary";
import { useDispatch, useSelector } from "react-redux";
// import seatSlice from "../../redux/seatSlice";
const Screen = () => {
  console.log(seatSlice);

  const { arrGhe, gheDangDat } = useSelector((state) => state.seatSlice);
  console.log(arrGhe);

  const dispatch = useDispatch();
  const handleGhe = (seat) => {
    dispatch(bookSeat(seat));
  };
  const total = gheDangDat.reduce((sum, ghe) => sum + ghe.gia, 0);
  return (
    <div className="container">
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
                {row.danhSachGhe.map((seat, seatIndex) => {
               
                  const isSelected = gheDangDat.find(
                    (item) => item.soGhe === seat.soGhe
                  );
                  if (seat.daDat) {
                    return (
                      <button className="gheDuocChon" key={seatIndex} disabled>
                        {seat.soGhe}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        className={isSelected ? "gheDangChon" : "ghe"}
                        key={seatIndex}
                        onClick={() => handleGhe(seat)}
                      >
                        {seat.soGhe}
                      </button>
                    );
                  }
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Summary
        arrGhe={arrGhe}
        gheDangDat={gheDangDat}
        handleGhe={handleGhe}
        total={total}
      />
    </div>
  );
};

export default Screen;
