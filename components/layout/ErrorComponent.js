import classes from "./ErrorComponent.module.css";

function ErrorComponent(props) {
    return <div className={classes.error}><h2>No results were fetched.</h2> 
    Error: {props.statusCode}</div>
  }

  export default ErrorComponent;