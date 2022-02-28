import Link from "next/link";
// "/" to be replaced with proper routes
function NavigationLinks(props) {
  return (
    <ul className={props.className}>
      <li>
        <Link href="/">
          <a onClick={props.onClick}>Movies</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a onClick={props.onClick}>TV-shows</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a onClick={props.onClick}>Actors</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a onClick={props.onClick}>Sign in</a>
        </Link>
      </li>
    </ul>
  );
}
export default NavigationLinks;
