import { RefObject } from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const SearchLayout = ({ onChange, placeholder }: Props) => {
  return <input type="input" onChange={onChange} placeholder={placeholder} />;
};

export default SearchLayout;
