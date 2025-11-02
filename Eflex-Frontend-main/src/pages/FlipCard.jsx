
import "./FlipCard.css";

export default function FlipCard({ image, name, role, tagline, bio, socials }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={image} alt={name} className="team-img" />
          <h3>{name}</h3>
          <p><strong>{role}</strong></p>
          {tagline && <p className="tagline">{tagline}</p>}
          {socials && socials.length > 0 && (
            <div className="front-socials">
              {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <div className="flip-card-back-content">
            <h3>{name}</h3>
            <p>{bio}</p>
          </div>
          {socials && socials.length > 0 && (
            <div className="back-socials">
              {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
