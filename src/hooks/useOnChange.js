import { debounce } from "lodash";
import { useState } from "react";

export default function useOnChange() {
    const [value, setValue] = useState("");
    const handleOnChange = debounce((e) => {
        setValue(e.target.value);
    },500);
    return {
        value,
        handleOnChange
    }
}