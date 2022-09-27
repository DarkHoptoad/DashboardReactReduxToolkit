import { JobPosition } from "./JobPosition";
import { useSelector, useDispatch } from "react-redux";
import { selectVisiblePositions } from "../store/positions/positions_selector";
import { addFilter } from "../store/filters/filters_action";
import { selectFilters } from "../store/filters/filters_selector";

const JobList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, filter)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
