import SocialLinks from '../SocialLinks/SocialLinks';

const ProfileCard = ({ name, profilePic, locationName, description, socialLinks }) => {
  return (
    <section className="ProfileCard">
      <section className="ProfileCard-data">
        <img src={profilePic || '/avatar-jessica.jpeg'} alt={`Profile picture of ${name}`} />

        <div className="ProfileCard-container">
          <h1 className="ProfileCard-heading1">{name}</h1>
          <p className="ProfileCard-paragraph ProfileCard-paragraph-location">{locationName}</p>
        </div>

        <p className="ProfileCard-paragraph">
          {description}
        </p>
      </section>

      <SocialLinks links={socialLinks}/>
    </section>
  );
};
export default ProfileCard;
