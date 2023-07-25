import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function Currency() {
  const { currency, dispatch } = useContext(AppContext);
  const [ c, setC ] = useState(currency);

  useEffect(() => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: c,
    });
  }, [c, dispatch]);

  return (
    <div className="alert alert-success">
      <span>Currency </span>
      <select
        className="custom-select"
        onChange={(e) => setC(e.target.value)}
        value={c}
      >
        <option value="£" name="pound">
          £ Pound
        </option>
        <option value="$" name="dollar">
          $ Dollar
        </option>
        <option value="€" name="euro">
          € Euro
        </option>
        <option value="₹" name="ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
}
