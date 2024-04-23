import '@/styles/components/socialLinks.css';

const SocialLinks = ({ links }) => {
  return (
    <ul className="SocialLinks">
      {links.map(linkInfo => (
        <li className='SocialLinks-linkItem' key={linkInfo.socialName}>
          <a className='SocialLinks-link' href={linkInfo.link} target="_blank">{linkInfo.socialName}</a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLinks;
