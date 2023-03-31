import PropTypes from "prop-types";

export function Button({ text, name = "User" }) {
  return (
    <button
      onClick={function () {
        console.log(text, name);
      }}
    >
      {text}
      {name}
    </button>
  );
}

Button.prototype = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "Default Button",
};
