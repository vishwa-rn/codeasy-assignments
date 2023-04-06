// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

// UserProfile.propTypes = {
//   userId: PropTypes.string.isRequired,
// };

export default function UserProfile() {
  const { userId } = useParams();
  //   console.log("userprofile", params);
  return <>{userId}</>;
}
