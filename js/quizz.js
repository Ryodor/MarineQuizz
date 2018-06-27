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
                        <img src="../image/isa_tmp.jpg" alt="Guillaume Warckol">
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
    <div id="question" class="q2">
        <p class="text">Qui est la meilleur coordinatrice pédagogique?</p>
        <table>
            <form action="">
                <tr>

                    <th>
                        <img src="../image/marine_le_pen.jpg" alt="André De Soussa">
                    </th>
                    <th>
                        <img src="../image/marine_leleu.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img src="../image/marine_lorphelin.jpg" alt="Guillaume Warckol">
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="radio" id="contactChoice1" name="contact" value="André De Sousa">
                        <label for="contactChoice1">Marine Le Pen</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice2" name="contact" value="Julien Pavon">
                        <label for="contactChoice2">Marine Leleu</label>
                    </th>

                    <th>
                        <input type="radio" id="contactChoice3" name="contact" value="Guillaume Warckol">
                        <label for="contactChoice3">Marine Lorphelin</label>
                    </th>
                </tr>
                <tr>

                    <th>
                        <img src="../image/marine_nationale.jpg" alt="André De Soussa">
                    </th>
                    <th>
                        <img src="../image/marine_huertas.jpg" alt="Julien Pavon">
                    </th>
                    <th>
                        <img src="../image/marine_bleu.jpg" alt="Guillaume Warckol">
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
                        <input type="radio" id="contactChoice3" name="contact" value="Guillaume Warckol">
                        <label for="contactChoice3">Bleu Marine</label>
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
    `;
  }