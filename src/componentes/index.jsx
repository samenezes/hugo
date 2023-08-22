import React from 'react'
import'./main.css'

export default function perguntas(){
    return(
        <section>
            <div>
                <div className="text">Pergunta de jogos</div>
                <div className="btn">
                    <button className="b">Clique aqui</button>
                </div>
                <div className="gerator">
                    <div>
                        <p className="legenda">Jogue aqui</p>
                    </div>
                </div>
            </div>
        </section>
    )

    function primaryRequest(){
        const valores = fetch('https://opentdb.com/api.php?amount=30&category=15').then(pergunta=>{
            pergunta.json().then(jogos=>{
                console.log(jogos.data)

                var btn = document.querySelector('.b')

                btn.addEventListener('click',()=>{
                    var perguntinhas = document.querySelector('.peg')

                    perguntinhas.src=jogos.data.perguntas[Math.floor(Math.random()*100)].url
                    Resposta()
                })
            })
        })
    }

    function Resposta(){
        fetch('https://opentdb.com/api.php?amount=30&category=15').then(resposta=> resposta.json()
        .then(dados=>{
            var resposta = document.querySelector('.resposta')

            resposta.innerHTML = `${dados.content}`


        }))
    }
    primaryRequest()
}