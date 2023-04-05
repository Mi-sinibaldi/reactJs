import React, { Component } from 'react';
import avatar from '../images/mimi.png';
import image1 from '../images/android.jpeg';
import image2 from '../images/harry.jpeg';
import image3 from '../images/cloe.jpeg';
import '../css/PersonalInfo.css';

class PersonalInfo extends Component {
  render() {
    return (
      <article className="text-article">
      <h1>Olá Universo!</h1>
      <p className="p-text-article">Meu nome é Michelle e esse é meu primeiro projeto em ReactJS!</p>
      <img src={avatar} alt="avatar" id="avatar"/>
      <div className="div-article">
        <img src={image1} alt="imagem que representa o Android" className="ilustracao"/>
        <p className="p-div">
        Oie, eu sou a Michelle, tenho 31 anos e sou desenvolvedora Android!
        Sou formada em Marketing e Análise e Desenvolvimento de Sistemas, atualmente trabalho no Itaú.
        <br></br>
        Além disso, sou casada, tenho um filhote de 7 anos, o Henrique. As vezes eu abro o microfone sem querer e sai o meu aúdio
        pedindo para ele esperar - a maioria das vezes é gritando - também sou mae da Cloe, minha labradora amarela, gorda e perfeita.
        </p>
      </div>
      <div className="div-article" id="div-middle">
        <img src={image2} alt="imagem de um personagem segurando no braco uma coruja" className="ilustracao" id="ilustracao3"/>
        <p className="p-div">
        Quem me conhece sabe que eu adoro um show, é a minha cara, nao perco uma oportunidade de estar cantando a plenos pulmões (gritando seria o mais correto!)
        <br></br>
        Além disso sou uma super Potterhead (Malfaeito, feito - nox!) Minha casa? Grifinória, é claro! (10 pontos para a Grifinória!!!) Meu personagem preferido? Óbvio que é a Edwiges (óbvio!)
        <br></br>
        Gosto de ler livros ouvindo musica, mas sou ecologicamente correta (mentira! meu marido que me obrigou), só uso kindle.
        Sou aquariana, porém um amorzinho (é verdade esse bilhete!)
        </p>
      </div>
      <div className="div-article">
        <img src={image3} alt="imagem de um cachorro" className="ilustracao"/>
        <p className="p-div">
        E para finalizar, meu maior sonho é poder dar um lar para todos os bichinhos da rua, cuidar deles com muito amor e carinho, 
        mimar e dar todos os petisco que quiserem.
        Meu Lar doce lar.
        <br></br>
        Ouse sonhar!
        </p>
      </div>
    </article>
    );
  }
}
    
export default PersonalInfo;