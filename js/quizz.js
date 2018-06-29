function question2() {
    document.getElementById("question").innerHTML = `
    <div id="question" class="q2">
        <p class="text">Quel groupe est le plus INSUPORTABLE!?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img src="../image/cédric_adam.jpg" alt="André De Soussa">
                    </th>
                    <th>
                        <img src="../image/kiki.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                    <img src="../image/isa.jpg" alt="Guillaume Warckol">
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                        <label for="contactChoice1">Groupe A</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice2" name="contact" value="Julien Pavon">
                        <label for="contactChoice2">Groupe B</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice3" name="contact" value="Guillaume Warckol">
                        <label for="contactChoice3">Temps Plein</label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <button id="nextbutton" onclick="question3()">Next</button>
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
  }

  function question3() {
    document.getElementById("question").innerHTML = `
    <div id="question" class="q3">
        <p class="text">Qui est la meilleur coordinatrice pédagogique?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img src="../image/marine_nationale.jpg" alt="André De Soussa">
                    </th>
                    <th>
                        <img src="../image/marine_huertas.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img src="../image/marinelepencarré.jpeg" alt="André De Soussa">
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                        <label for="contactChoice1">Marine National</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice2" name="contact" value="Julien Pavon">
                        <label for="contactChoice2">Marine Huertas</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                        <label for="contactChoice1">Marine Le Pen</label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <button id="nextbutton" onclick="question4()">Next</button>
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
  }

  function question4() {
    document.getElementById("question").innerHTML = `
    <div id="question" class="q4">
        <p class="text">Qui était le PO de NoSql ?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img src="../image/lauris_braka.jpeg" alt="André De Soussa">
                    </th>
                    <th>
                        <img src="../image/Damien_r.jpeg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img src="../image/sylvain_delafoy.jpeg" alt="Guillaume Warckol">
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                        <label for="contactChoice1">Lauris Braka</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice2" name="contact" value="Julien Pavon">
                        <label for="contactChoice2">Damien Russier</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice3" name="contact" value="Guillaume Warckol">
                        <label for="contactChoice3">Sylvain Delafoy</label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <button id="nextbutton" onclick="question5()">Next</button>
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
  }

  function question5() {
    document.getElementById("question").innerHTML = `
  <div id="question" class="q1">
  <p class="text">Où sont les cables HDMI ?</p>
  <table>
      <form action="">
          <tr>

              <th>
                  <img src="../image/tiroir_coding.jpg" alt="André De Soussa">
              </th>
              <th>
                  <img src="../image/tv_magouille.jpg" alt="Julien Pavon">
              </th>
              <th>
                  <img src="../image/erreur-404-0.jpg" alt="Guillaume Warckol">
              </th>
          </tr>
          <tr>
              <th>
                  <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                  <label for="contactChoice1">Bien rangé dans les tiroirs à leurs place ?</label>
              </th>

              <th>
                  <input type="radio" id="contactChoice2" name="contact" value="Julien Pavon">
                  <label for="contactChoice2">Vous pouvez répéter la question.</label>
              </th>

              <th>
                  <input type="radio" id="contactChoice3" name="contact" value="Guillaume Warckol">
                  <label for="contactChoice3">Ont les cherches encore...</label>
              </th>
          </tr>
          <tr>
              <th></th>
              <th>
                  <button id="nextbutton" onclick="question6()">Next</button>
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
  }

  function question6() {
    document.getElementById("question").innerHTML = `
    <div id="question" class="q6">
    <p class="text">Et le babyfoot ???</p>
    <table>
        <form action="">
            <tr>

                <th>
                    <img src="../image/troll_babyfoot.png" alt="André De Soussa">
                </th>
                <th>
                    <img src="../image/renoi_babyfoot.jpg" alt="Julien Pavon">
                </th>
                <th>
                    <img src="../image/babyfoot_aveugle.jpg" alt="Guillaume Warckol">
                </th>
            </tr>
            <tr>
                <th>
                    <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                    <label for="contactChoice1">Quel babyfoot? </label>
                </th>

                <th>
                    <input type="radio" id="contactChoice2" name="contact" value="Julien Pavon">
                    <label for="contactChoice2">Il est en route</label>
                </th>

                <th>
                    <input type="radio" id="contactChoice3" name="contact" value="Guillaume Warckol">
                    <label for="contactChoice3">Je ne vois pas de quoi vous parlez ?</label>
                </th>
            </tr>
            <tr>
                <th></th>
                <th>
                    <button id="nextbutton" onclick="question7()">Next</button>
                </th>
            </tr>
            <tr>
                    <th>
                        <p>
                            <b> HELP : </b> Soit franc envers toi-même...</p>
                    </th>
                </tr>

        </form>
    </table>
</div>

    `;
  }

  function question7() {
    document.getElementById("question").innerHTML = `
    <div id="question" class="q7">
        <p class="text">Qu'a tu préféré cette année ?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img src="../image/coding_hero.png" alt="André De Soussa">
                    </th>
                    <th>
                        <img src="../image/coding_bureau.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img src="../image/autre_chos.jpg" alt="Guillaume Warckol">
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                        <label for="contactChoice1">Les élèves, ont est tous adorables... </label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice2" name="contact" value="Julien Pavon">
                        <label for="contactChoice2">Les magnifiques locaux qui donnent envie de venir</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice3" name="contact" value="Guillaume Warckol">
                        <label for="contactChoice3">Autre chose que tu souhaite nous partager ? </label>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <button id="nextbutton" onclick="End()">Fin...</button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p>
                            <b> HELP : </b> Ta pas besoin d'aide pour celle la</p>
                    </th>
                </tr>

            </form>
        </table>
    </div>

    `;
  }

  function surprise() {
    document.getElementById("surprise").innerHTML = `
    <div id="question" class="q7">
    <p class="text">La surprise !!!</p>
    <audio id="audioPlayer">
        <source src="hype_home.ogg">
        <source src="../music/Karaoké_Hugues_Aufray_Adieu_monsieur_le_professeur.mp3">
    </audio>
    
    <button class="control" onclick="play('audioPlayer', this)">Play</button>
    <button class="control" onclick="resume('audioPlayer')">Stop</button>
<script type="text/javascript" src="../js/quizz.js"></script>
</div>

    `;
}

function End() {
    document.getElementById("question").innerHTML = `
    <div id="question" class="q7">
    <p class="text">Voici ta surprise, clic pour la découvrir !!!</p>
    <button id="nextbutton" onclick="surprise()">Cadeau</button>
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