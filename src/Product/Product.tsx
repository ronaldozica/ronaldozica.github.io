import './Product.css';

export default function Product() {
    const IMAGE_URL = "https://img.elo7.com.br/product/main/16E1780/galinha-peso-de-porta-cozinha.jpg";
    return (
        <div className="container page-wrapper">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={IMAGE_URL} alt=""/>
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">Descrição do produto</span>
                                        <span className="p-company">Nome</span>
                                    </div>
                                    <div className="a-size">Disponível nos tamanhos: <span className="size">P, M, G, XG</span></div>
                                </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"/>
                            </div>

                            <a className="cart" href="https://api.whatsapp.com/send?phone=1531998648448&text=Olá!%20Quero%20o%20produto%20x." target="_blank" rel="noreferrer">
                                {/* <span className="price">$120</span> */}
                                <span className="add-to-cart">
                                    <span className="txt">Quero comprar!</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  