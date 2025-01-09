import UserResult from "../users/UserResult";
import UserSearch from "../users/UserSearch";

function Home({ handleAlert }) {
  return (
    <div>
      <UserSearch handleAlert={handleAlert} />
      <UserResult />
    </div>
  );
}

export default Home;
