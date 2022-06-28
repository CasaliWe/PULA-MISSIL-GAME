var mario = document.querySelector('.mario')
var pipee = document.querySelector('.pipe') 
var contadorr = 0
var personagem = 1
var selecionarMscPlayList = 4
var pularMusica = 0


//Songs
const regres = new Audio()
regres.src = './song/regres.mp3'
const trocarPerso = new Audio()
trocarPerso.src = "./song/start.mp3"
const bomba = new Audio()
bomba.src = "./song/bomba.mp3"
const grito = new Audio()
grito.src = "./song/grito.mp3"
const pulo = new Audio()
pulo.src = "./song/puloo.mp3"
const apito = new Audio()
apito.src = "./song/apito.mp3"
const pare = new Audio()
pare.src = "./song/pare.mp3"
//Playlist
const bkg = new Audio()
bkg.src = "./song/bkg.mp3"
const corno = new Audio()
corno.src = "./song/corno.mp3"
const decadence = new Audio()
decadence.src = "./song/decadence.mp3"
const eminem = new Audio()
eminem.src = "./song/eminem.mp3"





function funcIndex(){
       //------------Iniciar Jogo------------
      document.getElementById('iniciarJogo').addEventListener('click', ()=>{
          window.location.href = 'jogo.html'
      })


      //Aba Como jogar
      document.getElementById('como-jogar').addEventListener('click', ()=>{
               document.getElementById('janela-como-jogar').style.cssText = `height: 100vh;padding: 20px; transition: all 1s`
      })

      document.getElementById('fecharJanela').addEventListener('click', ()=>{
        document.getElementById('janela-como-jogar').style.cssText = `height: 0vh;padding: 0px; transition: all 1s`
      })
}





function funcJogo(){

            
            //btn para escolher a msc
            document.getElementById('btn-musica').addEventListener('click', ()=>{
                    pularMusica++
                    if(pularMusica == 1) {
                       selecionarMscPlayList = 1000
                       eminem.play()
                       corno.pause()
                       decadence.pause()
                       bkg.pause()
                    } else if(pularMusica == 2) {
                       eminem.pause()
                       corno.play()
                       decadence.pause()
                       bkg.pause()
                    } else if(pularMusica == 3){
                       eminem.pause()
                       corno.pause()
                       decadence.play()
                       bkg.pause()
                    } else if(pularMusica == 4){
                       eminem.pause()
                       corno.pause()
                       decadence.pause()
                       bkg.play()
                    } else if(pularMusica = 5) {
                        eminem.pause()
                        corno.pause()
                        decadence.pause()
                        bkg.pause()
                        pularMusica = 0
                    }
            })


            //btn para PAUSAR
            setTimeout(() => {

               document.getElementById('btn-pause').style.display = 'inline'

               document.getElementById('btn-pause').addEventListener('click', ()=>{
                if(pipee.style.display == 'block'){
                    pipee.style.display = 'none'
                    document.getElementById('pause').style.display = 'block'
                    pare.play()
                } else {
                    pipee.style.display = 'block'
                    document.getElementById('pause').style.display = 'none'
                }
            })
            }, 3000);


           
    
         
            /*Contagem para inicar jogo*/ 
            regres.play()
            var txtContagemRegress = document.getElementById('contagem-inicial').textContent
            var contagemRegress = Number(txtContagemRegress)
            var clear = setInterval(() => {
                 contagemRegress--
                 document.getElementById('contagem-inicial').textContent = `${contagemRegress}`
                 regres.play()
            }, 1000);
            
            setTimeout(() => {
                clearInterval(clear)
                apito.play()
                document.getElementById('contagem-inicial').textContent = 'VAI!'
                document.getElementById('contagem-inicial').style.color = 'green'
            }, 3000);


            setTimeout(() => {
                document.getElementById('contagem-inicial').remove()
            }, 4000);

         

         //Btn personagem
         document.getElementById('btn-personagem').addEventListener('click', ()=>{

              if(personagem == 1){
                  mario.src = './img/mario.gif'
                  personagem++
                  trocarPerso.play()
              } else if(personagem == 2) {
                 mario.src = './img/dançando.gif'
                 personagem++
                 trocarPerso.play()
              } else if(personagem == 3) {
                 mario.src = './img/sonic.gif'
                 personagem++
                 trocarPerso.play()
              } else if(personagem == 4) {
                 mario.src = './img/correndo.gif'
                 personagem++
                 trocarPerso.play()
              } else if(personagem == 5) {
                 mario.src = './img/naruto.gif'
                 personagem++
                 trocarPerso.play()
              } else if(personagem == 6) {
                mario.src = './img/homer.gif'
                personagem = personagem - 5
                trocarPerso.play()
              } 
         })

         //Btn sair
         document.getElementById('btn-sair').addEventListener('click', ()=>{
              window.location.href = 'index.html'
        })





         //----------Tempo para inicializar o pipe-------------
         setTimeout(() => {
             pipee.style.display = 'block'
             playList();
               

                  // ---------------Ação pular/chamar func contar pontos-----------------
                 document.querySelector('#btn-pular').addEventListener('click', ()=>{
   
                     mario.classList.add('jump')
                     pulo.play()

                     setTimeout(() => {
                        contador();
                     }, 100);

                     setTimeout(() => {
                        /*Chama a função que verifica os pontos e determina a velocidade do pipe*/
                        velocidadePipe();
                     }, 420);
        
                     setTimeout(() => {
                       mario.classList.remove('jump')
                     }, 750);

                     
     
                 })

         }, 4500);




         //Play list msc aleatórioa na inicialização do pipe
         function playList(){
                var msc = Math.floor(Math.random() * selecionarMscPlayList)
                   if(msc == 0) {
                       eminem.play()
                   } else if(msc == 1) {
                       corno.play()
                   } else if(msc == 2){
                       bkg.play()
                   } else if(msc == 3){
                       decadence.play()
                   }   
         }




        //Função contar pontos
        function contador(){
              contadorr++
              document.querySelector('.pontos').textContent = `Pontos: ${contadorr}`
        }
        
   
        /*Determina a velocidade do pipe dependendo da pontuação*/
        function velocidadePipe(){
               if(contadorr == '5') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipe')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipee')
                     }, 700);
                } else  if(contadorr == '10') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipeee')
                     }, 700);
                } else if(contadorr == '15') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipeee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipeeee')
                     }, 700);
                } else if(contadorr == '20') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipeeee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipeeeee')
                     }, 700);
                } else if(contadorr == '23') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipeeeee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipe')
                     }, 700);
                } else if(contadorr == '30') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipe')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipeee')
                     }, 700);
                } else if(contadorr == '38') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipeee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipeeeee')
                     }, 700);
                } else if(contadorr == '42') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipeeeee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipee')
                     }, 700);
                } else if(contadorr == '60') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipeeee')
                     }, 700);
                } else if(contadorr == '80') {
                    document.getElementById('pipeVelo').style.cssText = `display: none;`
                    document.getElementById('pipeVelo').classList.remove('pipeeee')
                     setTimeout(() => {
                         document.getElementById('pipeVelo').style.cssText = `display: block;`
                         document.getElementById('pipeVelo').classList.add('pipee')
                     }, 700);
                } else if(contadorr == '100') {
                     document.getElementById('pipeVelo').style.cssText = `display: none;`
                     setTimeout(() => {
                         window.location.href = 'vitoria.html'
                     }, 1500);
                } 
        
        }




         // -----------Loop verificar derrota------------
         var loop = setInterval(() => {
   
                const pipePosition = pipee.offsetLeft;
                const pipePosition2 = +window.getComputedStyle(mario).bottom.replace('px', '');   
   
                if(pipePosition <= 40 && pipePosition > 0 && pipePosition2 <= 90){
                      pipee.style.animation = 'none'
                      pipee.style.left = `${pipePosition}px`

                      mario.style.animation = 'none'
                      mario.style.bottom = `${pipePosition2}px`
                      mario.src = "img/explode.png"
                      mario.style.width = '65px'
                      mario.style.marginLeft = '80px'
                      pipee.remove()
                      bomba.play()

                     clearInterval(loop)

                     reiniciarJogo(contadorr);

                }

         }, 10);
}





//---------Reiniciar jogo após game-over-----------------
function reiniciarJogo(pontos){
    grito.play()
    setTimeout(() => {
        window.location.href = 'game-over.html?' + pontos
    }, 2000);
}
