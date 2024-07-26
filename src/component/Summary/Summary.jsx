import React from "react";
// import seatSlice, { bookSeat } from "../../redux/seatSlice";
// import { useDispatch, useSelector } from "react-redux";

const Summary = ({ arrGhe, gheDangDat, total,removeGhe }) => {
  console.log(gheDangDat);
  return (
    <div className="summary-container">
      <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
      <div className="legend">
        <div className="legend-item">
          <span className="reserved"></span>Ghế đã đặt
        </div>
        <div className="legend-item">
          <span className="selected"></span>Ghế đang chọn
        </div>
        <div className="legend-item">
          <span className="available"></span>Ghế chưa chọn
        </div>
      </div>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {gheDangDat.map((item,index) => {
            return (
              <tr>
                <th>{item.soGhe}</th>
                <th>
                  {item.gia.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </th>
                <th>
                  <button key={index} onClick={()=>{removeGhe(item.soGhe)}}>x</button>
                </th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Tổng tiền</td>
            <td>
              {total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Summary;
