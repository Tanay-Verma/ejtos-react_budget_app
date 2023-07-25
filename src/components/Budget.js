import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [b, setB] = useState(budget);

  useEffect(() => {
    dispatch({
      type: "SET_BUDGET",
      payload: b,
    });
  }, [b, dispatch]);

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: £
        <input
          type="number"
          step="10"
          max="20000"
          onChange={(event) => {
            setB(() => {
              if (event.target.value > 20000) {
                alert("Budget Value cannot exceed 20000");
                return 20000;
              } else {
                return event.target.value;
              }
            });
          }}
          value={b}
        />
      </span>
    </div>
  );
};
export default Budget;
