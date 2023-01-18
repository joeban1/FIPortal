import { useEffect } from "react";

function Multiply(props) {
  useEffect(() => {
    props.updateTotalValue(props.value1, props.value2);
  }, [props.value1, props.value2]);

  return <div className="value">{props.children}</div>;
}

export default Multiply;
