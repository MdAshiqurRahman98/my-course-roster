import PropTypes from 'prop-types';

const Cart = ({ selectedCourse, remaining, totalCredit, totalPrice }) => {
    // console.log(selectedCourse);
    let count = 0;

    return (
        <div>
            <h5 className="border-b-2 border-[#1C1B1B33] pb-3 text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h5>
            <h3 className="pt-3 text-lg font-bold text-[#1C1B1B] pb-4">Course Name</h3>
            <div className="text-[#1C1B1B99] text-sm border-b-2 border-[#1C1B1B33] pb-4">
                {selectedCourse.map((course) => (
                    <ol key={course.id}>
                        <li className='pb-1'>{count = count + 1} {course.course_name}</li>
                    </ol>
                ))}
            </div>
            <h5 className="pt-3 border-b-2 border-[#1C1B1B33] pb-3 text-sm font-medium text-[#1C1B1BCC]">Total Credit Hour: {totalCredit}</h5>
            <h5 className="pt-3 text-sm font-semibold text-[#1C1B1BCC]">Total Price: {totalPrice} USD</h5>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.array,
    remaining: PropTypes.number,
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number
}

export default Cart;