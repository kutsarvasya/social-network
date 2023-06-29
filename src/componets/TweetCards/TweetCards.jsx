import {
  Border,
  Button,
  Card,
  ImgAvatar,
  ImgGoIT,
  ImgLogo,
  Line,
  Title,
} from "./TweetCards.styled";
import logo from "../../img/logo.png";
import logoGoIT from "../../img/logoGoIT.svg";
import border from "../../img/border.svg";
import { useDispatch } from "react-redux";
import { actions } from "../../store/TweetsSlice";
import { changeNumber } from "../../changeNumber";

function TweetCards({ userCard }) {
  const dispatch = useDispatch();

  const { avatar, follow, followers, tweets, id } = userCard;

  return (
    <Card>
      <ImgLogo src={logo} alt="" width={308} height={168} />
      <ImgGoIT src={logoGoIT} alt="" />
      <Line />
      <Border src={border} alt="" />
      <ImgAvatar width={80} height={80} src={avatar} alt="" />

      <Title> {tweets} TWEETS</Title>
      <Title>{changeNumber(String(followers))} FOLLOWERS</Title>
      <Button
        onClick={() => {
          follow
            ? dispatch(actions.following(id))
            : dispatch(actions.follow(id));
        }}
      >
        {follow ? "FOLLOWING" : "FOLLOW"}
      </Button>
    </Card>
  );
}

export default TweetCards;
