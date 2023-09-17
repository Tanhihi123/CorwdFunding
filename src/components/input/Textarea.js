import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({
  control,
  name,
  type = "text",
  placeholder = "",
  error = "",
  children,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 bg-transparent placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px] outline-none"
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
