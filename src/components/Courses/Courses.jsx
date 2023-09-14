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
        <div>

        </div>
    );
};

export default Courses;