import classes from "./ErrorComponent.module.css";

function ErrorComponent(props) {
    return <section className={classes.error}><h2>No results were fetched.</h2> 
    Error: {props.statusCode}</section>
  }

  export default ErrorComponent;