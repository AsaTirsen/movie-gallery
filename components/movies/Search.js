import { useCallback, useRef } from "react";
import classes from "./Search.module.css";

export default function Search(props) {
  const searchRef = useRef(null);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    props.passQuery(query);
  }, []);

  return (
    <section className={classes.container} ref={searchRef}>
      <input
        className={classes.search}
        onChange={onChange}
        placeholder="Search movie, TV shows or actors"
        type="text"
      />
    </section>
  );
}
