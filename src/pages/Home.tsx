import { useNavigate } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import senhaImg from '../assets/images/olho.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/home.scss';





export function Home() {


    const history = useNavigate();
    async function handleCreateRoom() {



        history('/painel/novo');
    }

    return (
        <body>
            <div className='container2'>
                <figure className='img-pc'>
                    <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                </figure>
                <div id='page'>

                    <main>
                        <div className='main-content'>
                            <img src={logoImg} />
                            <div className='separator'>
                                <h1>Bem vindo ao  Painel</h1>
                            </div>
                            <form>
                                <input
                                    type="text"
                                    placeholder='Digite seu e-mail'
                                />
                                <input
                                    type="password"
                                    placeholder="Digite sua senha"
                                />
                                <div className="cont-senha">
                                    <figure>
                                        <img src={senhaImg}></img>
                                    </figure>
                                </div>
                                <button type='submit' onClick={() => handleCreateRoom()}>
                                    Acessar
                                </button>
                            </form>
                        </div>
                    </main>
                    <aside>

                    </aside>


                </div >
            </div>
        </body>
    )
}