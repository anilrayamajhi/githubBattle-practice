var React = require('react');
var PropTypes = React.PropTypes;
import {dimension, text} from '../styles';

function UserDetails (user) {
  // console.log(user.scoress);
  return (
    <div style={text}>
      {!!user.scores && <li className="list-group-item"><h3>scores: {user.scores}</h3></li>}
      <li className="list-group-item"> <img src={user.info.avatar_url} className="img-rounded img-responsive" style={dimension}/></li>
      {user.info.name && <li className="list-group-item"><strong>Name: {user.info.name}</strong></li>}
      <li className="list-group-item">Username: {user.info.login}</li>
      {user.info.location && <li className="list-group-item">Location: {user.info.location}</li>}
      {user.info.company && <li className="list-group-item">Company: {user.info.company}</li>}
      <li className="list-group-item">Followers: {user.info.followers}</li>
      <li className="list-group-item">Following: {user.info.following}</li>
      <li className="list-group-item">Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li className="list-group-item">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  scores: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}

module.exports = UserDetails;
