import React from "react";
// import seatSlice, { bookSeat } from "../../redux/seatSlice";
// import { useDispatch, useSelector } from "react-redux";

const Summary = ({ arrGhe, gheDangDat, total,removeGhe }) => {
  console.log(gheDangDat);
  return (
    <div className="summary-container grid-cols-1">
      <h2 className="text-3xl">DANH SÁCH GHẾ BẠN CHỌN</h2>
      <div className="summary-seats text-2xl">
        <div className="summary-item">
          <span className="reserved"></span>Ghế đã đặt
        </div>
        <div className="summary-item">
          <span className="selected"></span>Ghế đang chọn
        </div>
        <div className="summary-item">
          <span className="available"></span>Ghế chưa chọn
        </div>
      </div>
      <table className="summary-table text-2xl">
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
            <td >Tổng tiền</td>
            <td colSpan="2">
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
