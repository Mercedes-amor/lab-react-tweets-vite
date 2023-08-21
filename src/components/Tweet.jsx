import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}

          <User name={props.tweet.user.name} handle={props.tweet.user.handle}/>


          <Timestamp time={props.tweet.timestamp}></Timestamp>
        </div>


        <Message message={props.tweet.message}> 

        </Message>


        <Actions/>

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
