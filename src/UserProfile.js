import Proptypes from "prop-types";

UserProfile.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number,
  email: Proptypes.string,
  bio: Proptypes.string,
};

export default function UserProfile({
  name = "Vishwa",
  age = 24,
  email = "bla@gmail.com",
  bio = "Hello world",
}) {
  // const savedName = name;
  name = 25;

  return (
    <>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </>
  );
}
