import React, { useState } from 'react'

function ConfirmButton2(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };
  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? "checked" : "check"}
    </button>
  )
}

export default ConfirmButton2