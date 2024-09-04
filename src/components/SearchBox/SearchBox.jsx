// SearchBox.jsx
import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  selectUsernameFilter,
  selectEmailFilter,
  selectPhoneFilter,
} from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filterSlice";
import css from "./SearchBox.module.css";
export const SearchBox = () => {
  const filterName = useSelector(selectNameFilter);
  const filterUsername = useSelector(selectUsernameFilter);
  const filterEmail = useSelector(selectEmailFilter);
  const filterPhone = useSelector(selectPhoneFilter);

  const dispatch = useDispatch();

  const handleFilterChange = (filterType) => (e) => {
    let value = e.target.value.trim();

    // Валидация для phone
    if (filterType === "phone") {
      const phoneRegex = /^[\d+ -]*$/;
      if (!phoneRegex.test(value)) {
        return;
      }
    }

    dispatch(setStatusFilter({ [filterType]: value }));
  };

  return (
    <div className={css.containerForInput}>
      <input
        className={css.input}
        type="text"
        value={filterName}
        onChange={handleFilterChange("name")}
        placeholder="Filter by name"
      />

      <input
        className={css.input}
        type="text"
        value={filterUsername}
        onChange={handleFilterChange("username")}
        placeholder="Filter by username"
      />
      <input
        className={css.input}
        type="email"
        value={filterEmail}
        onChange={handleFilterChange("email")}
        placeholder="Filter by email"
      />
      <input
        className={css.input}
        type="text"
        value={filterPhone}
        onChange={handleFilterChange("phone")}
        placeholder="Filter by phone"
      />
    </div>
  );
};
