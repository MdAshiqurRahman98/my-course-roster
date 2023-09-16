/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({ selectedCourse, remaining, totalCredit }) => {
    // console.log(selectedCourse);
    let count = 0;

    return (
        <div>
            <h5 className="border-b-2 border-[#1C1B1B33] pb-2 text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h5>
            <h3 className="pt-2 text-lg font-bold text-[#1C1B1B] pb-3">Course Name</h3>
            <div className="text-[#1C1B1B99] text-sm border-b-2 border-[#1C1B1B33] pb-3">
                {selectedCourse.map((course) => (
                    <ol key={course.id}>
                        <li>{count = count + 1} {course.course_name}</li>
                    </ol>
                ))}
            </div>
            <h5 className="pt-2 border-b-2 border-[#1C1B1B33] pb-2 text-sm font-medium text-[#1C1B1BCC]">Total Credit Hour: {totalCredit}</h5>
            <h5 className="pt-2 text-sm font-semibold text-[#1C1B1BCC]">Total Price: {totalCredit} USD</h5>
        </div>
    );
};

export default Cart;