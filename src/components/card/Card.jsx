import "./Card.scss";

export default function Card() {
  return (
    <div className="card-container">
      <img
        className="avatar"
        src="../../../public/assets/images/avatar-jessica.jpeg"
        alt="user picture"
      />
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <h3>Front-end developer and avid reader.</h3>

      <p>GitHub</p>
      <p>Frontend Mentor</p>
      <p>LinkedIn</p>
      <p>Twitter</p>
      <p>Instagram</p>
    </div>
  );
}
