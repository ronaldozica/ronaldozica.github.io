import { SocialIcon } from "react-social-icons";
import { StyledSocialMidiaIcons } from "./Styles";

const SocialMidiaIcons: React.FC = () => {
	return (
		<StyledSocialMidiaIcons>
			<SocialIcon url="https://api.whatsapp.com/send?phone=1531998648448" network="whatsapp" target="_blank" />
			<SocialIcon url="https://www.instagram.com/artesdajackeline/?hl=en" network="instagram" target="_blank" />
			<SocialIcon url="https://www.facebook.com/people/Artes-da-Jackeline/100063003952353" network="facebook" target="_blank" />
		</StyledSocialMidiaIcons>
	);
};

export default SocialMidiaIcons;
