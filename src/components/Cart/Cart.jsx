/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({ selectedCourse, remaining, totalCost }) => {
  console.log(selectedCourse);

  return (
    <div>
        <h5 className="border-b-2 border-[#1C1B1B33] pb-2 text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h5>
        <h3 className="pt-2 border-b-2 border-[#1C1B1B33] pb-2 text-lg font-bold text-[#1C1B1B]">Course Name</h3>
        <div className="text-[#1C1B1B99] text-sm"></div>
        <h5 className="pt-2 border-b-2 border-[#1C1B1B33] pb-2 text-sm font-medium text-[#1C1B1BCC]">Total Credit Hour: {selectedCourse.length}</h5>
        <h5 className="pt-2 text-sm font-semibold text-[#1C1B1BCC]">Total Price: {totalCost} USD</h5>
        {selectedCourse.map((course) => (
            <li key={course.id}>{course.course_name}</li>
        ))}
    </div>
  );
};

export default Cart;