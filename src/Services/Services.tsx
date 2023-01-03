import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';

export default function Services() {
    // const LOGO_URL = "https://cdn.discordapp.com/attachments/1056950292656169102/1056950361358876782/logo.png";
    return (
        <div className="ServiceCards">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    )
}  