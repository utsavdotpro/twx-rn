import clsx, { ClassValue } from "clsx";
import { useTailwind } from "tailwind-rn";

const twx = (...args: ClassValue[]) => {
  const tailwind = useTailwind();

  return tailwind(clsx(...args));
};

export default twx;
