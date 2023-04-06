import PropTypes from "prop-types";

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default function TodoItem({ todo = "No work item" }) {
  return <p style={{ color: "red" }}>{todo}</p>;
}
