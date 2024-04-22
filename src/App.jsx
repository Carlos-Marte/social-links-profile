import SocialLinksProfile from '@/components/ProfileCard/ProfileCard';

function App () {
  return (
    <>
      <SocialLinksProfile
        name='Jessica Randall'
        profilePic='/avatar-jessica.jpeg'
        locationName='London, United Kingdom'
        description='"Front-end developer and avid reader."'
        socialLinks={[
          { socialName: 'Github', link: '#' },
          { socialName: 'Frontend Mentor', link: '#' },
          { socialName: 'LinkedIn', link: '#' },
          { socialName: 'Twitter/X', link: '#' },
          { socialName: 'Instagram', link: '#' }
        ]}
      />
    </>
  );
}

export default App;
