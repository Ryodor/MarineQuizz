function question2() {
    document.getElementById("question").innerHTML = `
    <div class="formSection q2">
        <p class="text boldP">Quel groupe est le plus INSUPORTABLE!?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img id="img1" class="choice" src="../image/cédric_adam.jpg" alt="André De Soussa">
                    </th>
                    <th>
                        <img id="img2" class="choice" src="../image/kiki.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                    <img id="img3" class="choice" src="../image/isa.jpg" alt="Guillaume Warckol">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="contactChoice1">Groupe A</label>
                    </th>

                    <th>
                        <label for="contactChoice2">Groupe B</label>
                    </th>

                    <th>
                        <label for="contactChoice3">Temps Plein</label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <div id="nextbutton" class="button" onclick="question3()">Next</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p> <b> HELP : </b> L'un des groupes n'est pas présent...</p>
                    </th>
                </tr>

            </form>
        </table>
    </div>
    `;
    setListeners();
  }

  function question3() {
    document.getElementById("question").innerHTML = `
    <div class="formSection q3">
        <p class="text boldP">Qui est la meilleure coordinatrice pédagogique?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img id="img1" class="choice" src="../image/marine_nationale.jpg" alt="André De Soussa">
                    </th>
                    <th>
                        <img id="img2" class="choice" src="../image/marine_huertas.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img id="img3" class="choice" src="../image/marinelepencarré.jpeg" alt="André De Soussa">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="contactChoice1">Marine Nationale</label>
                    </th>

                    <th>
                        <label for="contactChoice2">Marine Huertas</label>
                    </th>

                    <th>
                        <label for="contactChoice1">Marine Le Pen</label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <div id="nextbutton" class="button" onclick="question4()">Next</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p>
                            <b> HELP : </b> Ce n'est probablement pas le bleu marine, Marine</p>
                    </th>
                </tr>

            </form>
        </table>
    </div>
    `;
    setListeners();
  }

  function question4() {
    document.getElementById("question").innerHTML = `
    <div class="formSection q4">
        <p class="text boldP">Qui était le PO de NoSql ?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img id="img1" class="choice" src="../image/lauris_braka.jpeg" alt="André De Soussa">
                    </th>
                    <th>
                        <img id="img2" class="choice" src="../image/Damien_r.jpeg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img id="img3" class="choice" src="../image/sylvain_delafoy.jpeg" alt="Guillaume Warckol">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="contactChoice1">Lauris Braka</label>
                    </th>

                    <th>
                        <label for="contactChoice2">Damien Russier</label>
                    </th>

                    <th>
                        <label for="contactChoice3">Sylvain Delafoy</label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <div id="nextbutton" class="button" onclick="question5()">Next</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p>
                            <b> HELP : </b> C'est probablement l'un des trois...</p>
                    </th>
                </tr>
                
            </form>
        </table>
    </div>
    `;
    setListeners();
  }

  function question5() {
    document.getElementById("question").innerHTML = `
  <div class="formSection q1">
  <p class="text boldP">Où sont les adaptateurs HDMI ?</p>
  <table>
      <form action="">
          <tr>

              <th>
                  <img id="img1" class="choice" src="../image/tiroir_coding.jpg" alt="André De Soussa">
              </th>
              <th>
                  <img id="img2" class="choice" src="../image/tv_magouille.jpg" alt="Julien Pavon">
              </th>
              <th>
                  <img id="img3" class="choice" src="../image/erreur-404-0.jpg" alt="Guillaume Warckol">
              </th>
          </tr>
          <tr>
              <th>
                  <label for="contactChoice1">Bien rangés dans les tiroirs à leur place ?</label>
              </th>

              <th>
                  <label for="contactChoice2">Vous pouvez répéter la question ?</label>
              </th>

              <th>
                  <label for="contactChoice3">On les cherche encore...</label>
              </th>
          </tr>
          <tr>
              <th></th>
              <th>
                  <div id="nextbutton" class="button" onclick="question6()">Next</div>
              </th>
          </tr>
          <tr>
                    <th>
                        <p>
                            <b> HELP : </b> Sérieusement faut en racheter là...</p>
                    </th>
                </tr>

      </form>
  </table>
</div>
`;
setListeners();
  }

  function question6() {
    document.getElementById("question").innerHTML = `
    <div class="formSection q6">
    <p class="text boldP">Et le babyfoot ???</p>
    <table>
        <form action="">
            <tr>

                <th>
                    <img id="img1" class="choice" src="../image/troll_babyfoot.png" alt="André De Soussa">
                </th>
                <th>
                    <img id="img2" class="choice" src="../image/renoi_babyfoot.jpg" alt="Julien Pavon">
                </th>
                <th>
                    <img id="img3" class="choice" src="../image/babyfoot_aveugle.jpg" alt="Guillaume Warckol">
                </th>
            </tr>
            <tr>
                <th>
                
                    <label for="contactChoice1">Quel babyfoot? </label>
                </th>

                <th>
                    <label for="contactChoice2">Il est en route</label>
                </th>

                <th>
                    <label for="contactChoice3">Je ne vois pas de quoi vous parlez ?</label>
                </th>
            </tr>
            <tr>
                <th></th>
                <th>
                    <div id="nextbutton" class="button" onclick="question7()">Next</div>
                </th>
            </tr>
            <tr>
                    <th>
                        <p>
                            <b> HELP : </b> Sois franche envers toi-même...</p>
                    </th>
                </tr>

        </form>
    </table>
</div>

    `;
    setListeners();
  }

  function question7() {
    document.getElementById("question").innerHTML = `
    <div class="formSection q7">
        <p class="text boldP">Qu'as-tu préféré cette année ?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img id="img1" class="choice" src="../image/coding_hero.png" alt="André De Soussa">
                    </th>
                    <th>
                        <img id="img2" class="choice" src="../image/coding_bureau.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img id="img3" class="choice" src="../image/autre_chos.jpg" alt="Guillaume Warckol">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="contactChoice1">Les élèves, on est tous adorables... </label>
                    </th>

                    <th>
                        <label for="contactChoice2">Les magnifiques locaux qui donnent envie de venir</label>
                    </th>

                    <th>
                        <label for="contactChoice3">Autre chose que tu souhaites nous partager ? </label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <div id="nextbutton" class="button" onclick="End()">Fin...</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p>
                            <b> HELP : </b> T'as pas besoin d'aide pour celle-là</p>
                    </th>
                </tr>

            </form>
        </table>
    </div>

    `;
    setListeners();
  }

  function surprise() {
    document.getElementById("surprise").innerHTML = `
    <div class="formSection q7">
    <p class="text boldP">La surprise !!!</p>
    <audio id="audioPlayer">
        <source src="hype_home.ogg">
        <source src="../music/Karaoké_Hugues_Aufray_Adieu_monsieur_le_professeur.mp3">
    </audio>
    
    <div class="control button" onclick="play('audioPlayer', this)">Play</div>
    <div class="control button" onclick="resume('audioPlayer')">Stop</div>
<script type="text/javascript" src="../js/quizz.js"></script>
</div>

    `;
}

function End() {
    document.getElementById("question").innerHTML = `
    <div class="formSection q7">
    <p class="text boldP">Voici ta surprise, clique pour la découvrir !!!</p>
    <div id="nextbutton" class="button" onclick="surprise()">Cadeau</div>
    <div id="surprise">


    </div>

</div>
    `;
  }
function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
	
    if (player.paused) {
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause();	
        control.textContent = 'Play';
    }
}

function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
	
    player.currentTime = 0;
    player.pause();
}

function activeImg(el){
    el.className = "choice active";
    if(el.id == "img1"){
        document.getElementById("img3").className = "choice";
        document.getElementById("img2").className = "choice";
    }
    else if(el.id == "img2"){
        document.getElementById("img1").className = "choice";
        document.getElementById("img3").className = "choice";
    }
    else {
        document.getElementById("img1").className = "choice";
        document.getElementById("img2").className = "choice";
    }
}

function setListeners(){
    document.getElementById("img1").addEventListener('click', function(){
        document.getElementById("img1").className = "choice activeChoice";
        document.getElementById("img2").className = "choice";
        document.getElementById("img3").className = "choice";
    });
    
    document.getElementById("img2").addEventListener('click', function(){
        document.getElementById("img2").className = "choice activeChoice";
        document.getElementById("img1").className = "choice";
        document.getElementById("img3").className = "choice";
    });
    
    document.getElementById("img3").addEventListener('click', function(){
        document.getElementById("img3").className = "choice activeChoice";
        document.getElementById("img2").className = "choice";
        document.getElementById("img1").className = "choice";
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    setListeners();
});