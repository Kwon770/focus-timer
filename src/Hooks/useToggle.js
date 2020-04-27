import { useState } from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onClick = () => {
    setValue(!value);
    console.log(value);
  };

  return { value, onClick };
};
