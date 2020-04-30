import { useState } from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onClick = () => {
    setValue(!value);
  };

  return { value, onClick };
};
