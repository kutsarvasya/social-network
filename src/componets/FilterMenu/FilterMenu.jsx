import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/TweetsSlice";

function FilterMenu() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.tweets);
  return (
    <>
      <label>
        filter out users:
        <select
          onChange={(e) => {
            dispatch(actions.filter(e.target.value));
          }}
          name="filter"
          id="filter"
          value={filter}
        >
          <option value="all">ALL</option>
          <option value="follow">FOLLOW</option>
          <option value="following">FOLLOWING</option>
        </select>
      </label>
    </>
  );
}

export default FilterMenu;
