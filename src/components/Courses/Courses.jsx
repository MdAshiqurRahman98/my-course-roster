/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 mb-5 mt-11">
            <div className="flex flex-col lg:flex-row">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {allCourses.map((course) => (
                        <div key={course.id} className="bg-[#FFF]">
                            <div className="card-img">
                                <img className="photo" src={course.image} alt="" />
                            </div>
                            <h2>{course.course_name}</h2>
                            <p>
                                <small>{course.details}</small>
                            </p>
                            <div className="flex justify-evenly">
                                <p>$ Price: {course.price}</p>
                                <p>Credit: {course.credit}hr</p>
                            </div>
                            <button
                                onClick={() => handleSelectActor(course)}
                                className="bg-blue-500 text-white"
                            >
                                Select
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;