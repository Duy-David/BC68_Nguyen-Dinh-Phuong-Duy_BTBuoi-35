import React from "react";

const Summary = () => {
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
        {/* <tbody>
          {selectedSeats.map((seat, index) => (
            <tr key={index}>
              <td>{seat.soGhe}</td>
              <td>
                {seat.gia.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
              <td>
                <button onClick={() => onSelectSeat(seat)}>X</button>
              </td>
            </tr>
          ))}
        </tbody> */}
        <tfoot>
          <tr>
            <td colSpan="2">Tổng tiền</td>
            <td>
              {/* {total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })} */}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Summary;
