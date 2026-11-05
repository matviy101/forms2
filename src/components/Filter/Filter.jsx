
import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterInput
      type="text"
      placeholder="пошук"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  );
};

export default Filter;
