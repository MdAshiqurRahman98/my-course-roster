/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-12 py-5 mb-5 mt-5">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4">
                    {allCourses.map((course) => (
                        <div key={course.id} className="bg-[#FFF] rounded-lg p-4">
                            <div className="mb-3">
                                <img src={course.image} alt="" />
                            </div>
                            <h2 className="font-semibold text-[#1C1B1B] mb-2">{course.course_name}</h2>
                            <p className="mb-4 text-[#1C1B1B99]">
                                <small>{course.details}</small>
                            </p>
                            <div className="flex justify-around mb-5">
                                <div className="flex">
                                    <img className="-ml-3 w-5" src="/src/assets/dollar-sign 1.svg" alt="" />
                                    <p className="ml-2 text-sm font-semibold text-[#1C1B1B99]">Price: {course.price}</p>
                                </div>
                                <div className="flex">
                                    <img className="w-5" src="/src/assets/Frame.svg" alt="" />
                                    <p className="ml-2 text-sm font-semibold text-[#1C1B1B99]">Credit: {course.credit}hr</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleSelectCourse(course)}
                                className="bg-[#2F80ED] text-white font-semibold rounded-lg w-[240px] h-[35px]"
                            >
                                Select
                            </button>
                        </div>
                    ))}
                </div>
                <div className="bg-[#FFF] h-min w-1/4 rounded-lg p-5">
                    <Cart
                        selectedCourse={selectedCourse}
                        remaining={remaining}
                        totalCost={totalCost}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;