import discord from '../assets/discord.svg';
import globe from '../assets/globe.svg';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const SocialMedia = () => {
  return (
    <div className="my-3 items-center ml-3">
      <div className="flex flex-row sm:flex-row gap-3">
        <a href="http://bamarcheti.github.io/Portfolio/">
          <img
            src={globe}
            className="transition ease-in-out hover:-translate-1 hover:scale-110"
            alt="globe"
            title="CV online"
          />
        </a>
        <a href="https://discord.com/channels/@ba_marcheti#3824">
          <img
            src={discord}
            className="transition ease-in-out hover:-translate-1 hover:scale-110"
            alt="discord"
            title="Discord"
          />
        </a>
        <a href="https://www.instagram.com/ba_marcheti/">
          <img
            src={instagram}
            className="transition ease-in-out hover:-translate-1 hover:scale-110"
            alt="instagram"
            title="Instagram"
          />
        </a>
        <a href="https://www.linkedin.com/in/barbara-marcheti-fiorin/">
          <img
            src={linkedin}
            className="transition ease-in-out hover:-translate-1 hover:scale-110"
            alt="linkedin"
            title="LinkedIn"
          />
        </a>
        <a href="mailto:bmarchetifiorin@gmail.com">
          <img
            src={gmail}
            className="transition ease-in-out hover:-translate-1 hover:scale-110"
            alt="gmail"
            title="Gmail"
          />
        </a>
        {/* <a href="mailto:bmarchetifiorin@gmail.com">
          <img
            src={github}
            className="transition w-8 h-8 ease-in-out hover:-translate-1 hover:scale-110"
            alt="github"
            title="Github"
          />
        </a> */}
      </div>
    </div>
  );
};

export default SocialMedia;
