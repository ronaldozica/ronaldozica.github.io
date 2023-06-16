import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';

export default function Services() {
	return (
		<div className="ServiceCards">
			<ServiceCard image={localServices[0].image} title={localServices[0].title} subtitle={localServices[0].subtitle} />
			<ServiceCard image={localServices[1].image} title={localServices[1].title} subtitle={localServices[1].subtitle} />
			<ServiceCard image={localServices[2].image} title={localServices[2].title} subtitle={localServices[2].subtitle} />
		</div>
	)
}

const localServices = [
	{
		image: "https://cdn.discordapp.com/attachments/912368313508712488/1118138835751157792/image.png",
		title: "Entrega para todo Brasil",
		subtitle: "Realizamos entregas para todo o Brasil, converse conosco para verificar nossas taxas!"
	},
	{
		image: "https://cdn.shopify.com/app-store/listing_images/08313cab5d04fcc9a59ffc39eefa1521/icon/CPuHmrL0lu8CEAE=.png",
		title: "Produtos personalizados",
		subtitle: "Criamos novos produtos artesanais personalizados a cada compra, converse conosco e saiba mais!"
	},
	{
		image: "https://w1.pngwing.com/pngs/213/89/png-transparent-warehouse-inventory-inventory-management-software-inventory-control-warehouse-management-system-taking-logo-logistics-thumbnail.png",
		title: "Estampas sujeitas a estoque",
		subtitle: "Atenção: Nossas estampas estão sujeitas a estoque, converse conosco e verifique a que mais te agrada."
	}
];