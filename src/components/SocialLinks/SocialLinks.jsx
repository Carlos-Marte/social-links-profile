const SocialLinks = ({ links }) => {
  return (
    <ul className="SocialLinks">
      {links.map(linkInfo => (
        <li key={linkInfo.socialName}>
          <a href={linkInfo.link} target="_blank">{linkInfo.socialName}</a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLinks;
