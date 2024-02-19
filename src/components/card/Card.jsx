import "./Card.scss";

export default function Card() {
  return (
    <div className="card-container">
      <img
        className="avatar"
        src="../../../public/assets/images/avatar-jessica.jpeg"
        alt="user picture"
      />
      <div className="card-title">
        <div id="name">Jessica Randall</div>
        <div id="location">London, United Kingdom</div>
      </div>
      <div className="card-user-summary">
        &quot; Front-end developer and avid reader. &quot;
      </div>

      <div className="links-section">
        <a className="link-bar">GitHub</a>
        <a className="link-bar">Frontend Mentor</a>
        <a className="link-bar">LinkedIn</a>
        <a className="link-bar">Twitter</a>
        <a className="link-bar">Instagram</a>
      </div>
    </div>
  );
}
