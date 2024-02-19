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
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
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
