export const CustomHeader = props => {
  return (
    <a className="k-link" onClick={props.onClick}>
      <b>{props.title}</b>
      {props.children}
    </a>
  );
};
