import '../styles/painel.scss'
import logoImg from '../assets/images/logo.svg';
import frame1 from '../assets/images/Frame.svg';
import frame2 from '../assets/images/Frame 2.svg';
import frame3 from '../assets/images/Frame 3.svg';
import frame4 from '../assets/images/Frame 4.svg';
import { Link } from 'react-router-dom';
export function Painel() {
    return (
        <div className="s-layout">

            <div className="s-layout__sidebar">
                <nav className="s-sidebar__nav">
                    <div className='img'>
                        <Link to='/'> <img className="img-logo" src={logoImg} /></Link>
                    </div>
                    <ul>
                        <li>
                            <a className="s-sidebar__nav-link1" href="#0">
                                <img src={frame1}></img><em>Inicio</em>
                            </a>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link" href="#0">
                                <img src={frame2} /><em>Contatos</em>
                            </a>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link" href="#0">
                                <img src={frame3} /><em>Relatório</em>
                            </a>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link" href="#0">
                                <img src={frame2} /><em>Contatos</em>
                            </a>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link" href="#0">
                                <img src={frame2} /><em>Contatos</em>
                            </a>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link" href="#0">
                                <img src={frame2} /><em>Contatos</em>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className="s-layout__content">
                <div>
                    <div className="s-layout__title">
                        <div>
                            <h1>Olá <b>Usuário</b></h1>
                        </div>
                        <hr></hr>
                        <div className='s-layout__card'>
                            <div className="container">
                                <div className="a">
                                    <div className="img-div">
                                        <div className="data-div">
                                            <img src={frame4} />
                                            <p>minutos atras</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="title-div">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</p>
                                </div>
                            </div>

                        </div>
                        <div className='s-layout__card3'>
                            <div className="container">
                                <div className="a">
                                    <div className="img-div">
                                        <div className="data-div">
                                            <img src={frame4} />
                                            <p>minutos atras</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="title-div">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</p>
                                </div>
                            </div>

                        </div>
                        <div className='s-layout__card4'>
                            <div className="container">
                                <div className="a">
                                    <div className="img-div">
                                        <div className="data-div">
                                            <img src={frame4} />
                                            <p>minutos atras</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="title-div">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</p>
                                </div>
                            </div>

                        </div>

                        <div className='s-layout__card5'>
                            <div className="container">
                                <div className="a">
                                    <div className="img-div">
                                        <div className="data-div">
                                            <img src={frame4} />
                                            <p>minutos atras</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="title-div">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu.</p>
                                </div>
                            </div>

                        </div>
                    </div >



                </div >

            </main >
        </div >
    )
}

