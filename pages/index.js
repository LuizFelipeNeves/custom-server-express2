import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Contact from '../components/contact'

import { Carousel, Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default () => (
  <div>
  <Head>
  {/* 
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.1/prop-types.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-transition-group/2.2.1/react-transition-group.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-popper/0.10.4/umd/react-popper.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.min.js"></script>
  */}
  </Head>
  <Layout> 
    
    {/*
    <Link href='/a' as='/b'><a>b</a></Link>
    <Link href={{ pathname: '/fretes', query: { id: '2' } }} as='/fretes/2'><a>post #2</a></Link>
    */}

    <Carousel>
        <Carousel.Item>
            <Image src="static/img/img1.jpg" className="img-fluid d-block w-100"/>
            <Carousel.Caption className='d-none d-md-block'>
              <h3>Economize tempo e reduza custos de frete</h3>
              <p>Na hora de enviar um frete cada minuto conta. Encontre o veiculo e motorista que precisa em minutos, contrate diretamente e melhore a performance do seu negócio com uma redução de custos de transporte de até 30%.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="static/img/img2.jpg" className="img-fluid d-block w-100"/>
            <Carousel.Caption className='d-none d-md-block'>
              <h3>Contrate e acompanhe o serviço em tempo real</h3>
              <p>Divulgar seu frete é apenas o começo. A plataforma FRETES BRASIL oferece uma solução completa: da publicação à contratação, gerenciamento e avaliação do serviço prestado, estamos com você em todos os passos.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="static/img/img3.jpg" className="img-fluid d-block w-100"/>
            <Carousel.Caption className='d-none d-md-block'>
              <h3>Segurança, confiabilidade e eficiência</h3>
              <p>Confie seu frete aos melhores profissionais. O FRETES BRASIL traz a eficiência e a qualidade de serviço que seu negócio precisa, te conectando com a maior e mais qualificada base de caminhoneiros autônomos do Brasil.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <div className="container-fluid bg-dark" id="sobre">
      <div className="row ">
        <div className="col-md-12 text-center text-white b-5 mb-lg-20 my-5">
          <h3 className="text-uppercase mb-4 text-white">Fretes Brasil</h3>
          <div className="container-fluid md-12 mb-5 mb-lg-0 my-5">
            <div className="row">
              <div className="col text-center ">
            <p  className="lead mb-0 text-white">A FRETES BRASIL fundada em 2019 por pessoas com vasta experiência no segmento de transportes, que acreditaram que a qualidade e prestação de serviços de transporte de cargas necessitavam de atualização e compromisso, deste momento surgiu a ideia de criar uma empresa que pudesse ser líder de mercado atendendo a todos seus clientes com transparência, qualidade, eficácia e agilidade.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center text-white mb-5 mb-lg-20 my-5">
          <h1 className="display-4"><i className="mt-2 fas fa-truck"></i> </h1>
          <p  className="lead mb-0 text-black">Motoristas autônomos, carreteiros, transportadoras e embarcadores economizem tempo e dinheiro através da utilização de nossas ferramentas de comunicação interativa.</p>
        </div>
      <div className="col-md-4 text-center text-white mb-5 mb-lg-20 my-5">
        <h1 className="display-4"><i className="fas fa-user-friends "></i></h1>
        <p  className="lead mb-0 text-black">Criada por Ciro, Felipe, Flavio, Ícaro, Lucas e Luiz Felipe, a FRETES BRASIL tem foco no desenvolvimento de soluções para o setor de transporte de cargas.</p>
      </div>
    <div className="col-md-4 text-center text-white mb-5 mb-lg-20 my-5">
      <h1 className="display-4"><i className="mt-2 fas fa-shopping-cart "></i></h1>
      <p  className="lead mb-0 text-black">Nossa equipe presta assessoria que ajuda os motoristas a receberem o pagamento do saldo do frete.</p>
    </div>
    </div>
    </div>
    <Contact/>
  </Layout>
  </div>
)
