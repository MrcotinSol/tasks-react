import {Input} from "@heroui/react";
import { useState } from "react";

const TextInput = ({ value, index = undefined, placeholder, label }) => {
  const [mutabledata, setmutabledata] = useState(value);
  return (
    <Input
      key={index}
      isClearable
      className="dark:text-zinc-200"
      value={mutabledata}
      onChange={(e) => setmutabledata(e.target.value)}
      placeholder={placeholder}
      size="sm"
      label={label}
    />
  );
};

export default TextInput;