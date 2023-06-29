import { useDispatch, useSelector } from "react-redux";
import TweetCards from "../../componets/TweetCards/TweetCards";
import { Container } from "./Tweetspage.styled";
import { getTweetThank } from "../../store/TweetsThank";
import { actions } from "../../store/TweetsSlice";
import { useEffect, useMemo } from "react";
import FilterMenu from "../../componets/FilterMenu/FilterMenu";
function TweetsPage() {
  const dispatch = useDispatch();
  const { users, page, hidden, isActive, filter } = useSelector(
    (state) => state.tweets
  );
  const usersFilter = useMemo(() => {
    return users.filter((user) => {
      if (filter === "all") {
        return user;
      } else if (filter === "follow") {
        return user.follow === false;
      } else if (filter === "following") {
        return user.follow === true;
      }
      return user;
    });
  }, [filter, users]);
  console.log(usersFilter);
  useEffect(() => {
    if (isActive) return;
    dispatch(actions.active());
    console.log(isActive);
    dispatch(getTweetThank(page))
      .unwrap()
      .then((data) => {
        if (data.length < 3) {
          dispatch(actions.visibility());
        }
      });
  }, [dispatch, isActive, page]);

  return (
    <Container>
      <FilterMenu />
      {usersFilter.map((user) => (
        <TweetCards key={user.id} userCard={user} />
      ))}

      {!hidden && (
        <button
          onClick={() => {
            dispatch(actions.counterPage());
          }}
        >
          LOAD MORE
        </button>
      )}
    </Container>
  );
}
export default TweetsPage;
