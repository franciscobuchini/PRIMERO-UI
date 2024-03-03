import './SocialMedia.css';
import Appstore from './../../Assets/Icons/Appstore.svg'
import Behance from './../../Assets/Icons/Behance.svg'
import Discord from './../../Assets/Icons/Discord.svg'
import Dribbble from './../../Assets/Icons/Dribbble.svg'
import Email from './../../Assets/Icons/Email.svg'
import Facebook from './../../Assets/Icons/Facebook.svg'
import Github from './../../Assets/Icons/Github.svg'
import Instagram from './../../Assets/Icons/Instagram.svg'
import Linkedin from './../../Assets/Icons/Linkedin.svg'
import Playstore from './../../Assets/Icons/Playstore.svg'
import Podcast from './../../Assets/Icons/Podcast.svg'
import Snapchat from './../../Assets/Icons/Snapchat.svg'
import Soundcloud from './../../Assets/Icons/Soundcloud.svg'
import Spotify from './../../Assets/Icons/Spotify.svg'
import Telegram from './../../Assets/Icons/Telegram.svg'
import Tiktok from './../../Assets/Icons/Tiktok.svg'
import Twitch from './../../Assets/Icons/Twitch.svg'
import Wechat from './../../Assets/Icons/Wechat.svg'
import Whatsapp from './../../Assets/Icons/Whatsapp.svg'
import X from './../../Assets/Icons/X.svg'
import Youtube from './../../Assets/Icons/Youtube.svg'

const icons = [
  Appstore,
  Behance,
  Discord,
  Dribbble,
  Email,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Playstore,
  Podcast,
  Snapchat,
  Soundcloud,
  Spotify,
  Telegram,
  Tiktok,
  Twitch,
  Wechat,
  Whatsapp,
  X,
  Youtube,
];

export default function SocialMedia(props) {
  const className = `SocialMedia Style${props.style}`;
  const show = value => (value === '' ? 'yes' : '');

  return (
    <div className='SocialMediaContainer'>
    {icons.map((iconName) =>
    (<a key={iconName} className={className} id={iconName} hidden={show(props[iconName])}><img src={iconName}/></a>))}
  </div>
  );
}