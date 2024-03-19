<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <script src="js/main.js" ></script>
        <script src="js/pokedex.js" ></script>
        <script src="bootstrap-5.0.2-dist/js/bootstrap.js"></script>
        <link rel="stylesheet" href="css/bars.css">
        <link rel="stylesheet" href="bootstrap-5.0.2-dist/css/bootstrap.css">
    </head>
    <body>
        <div class="container"> 
            <h2>Pokemon Stat Quiz</h2>
            <div class="row p-2">
                <div class="col-lg-6 col-12">
                <div class="stat-wrapper">
                    <div class="stat-label">HP</div><div class="stat js-hp"></div>
                    <div class="stat-value">
                        <span class="js-hp-value d-none"></span>
                    </div>
                </div>
                <div class="stat-wrapper">
                    <div class="stat-label">atk</div><div class="stat js-atk"></div>
                    <div class="stat-value">
                        <span class="js-atk-value d-none"></span>
                    </div>
                </div>
                <div class="stat-wrapper">
                    <div class="stat-label">def</div><div class="stat js-def"></div>
                    <div class="stat-value">
                    <span class="js-def-value d-none"></span>
                    </div>
                </div>
                <div class="stat-wrapper">
                    <div class="stat-label">spa</div><div class="stat js-spa"></div>
                    <div class="stat-value">
                    <span class="js-spa-value d-none"></span>
                    </div>
                </div>
                <div class="stat-wrapper">
                    <div class="stat-label">spd</div><div class="stat js-spd"></div>
                    <div class="stat-value">
                    <span class="js-spd-value d-none"></span>
                    </div>
                </div>
                <div class="stat-wrapper">
                    <div class="stat-label">spe</div><div class="stat js-spe"></div>
                    <div class="stat-value">
                    <span class="js-spe-value d-none"></span>
                    </div>
                </div>
                </div>
                <div class="col-12 col-lg-6 mt-2"> 
                    <div class="row"> 
                        <div class="col-6 align-items-center">
                            <button class="btn btn-primary js-show-values m-2" type="button">Werte anzeigen</button>
                        </div>
                        <div class="col-6 align-items-center">
                            <button class="btn btn-secondary js-show-help col-6 m-2" type="button">Hilfe</button>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="row ms-4">
                    <div class="help-row d-none">
                        <span>Ability 1</span>
                        <span class="ability1"></span>
                    </div>
                    <div class="help-row d-none">
                        <span>Ability 2</span>
                        <span class="ability2"></span>
                    </div>
                    <div class="help-row d-none">
                        <span>Type 1</span>
                        <span class="type1"></span>
                    </div>
                    <div class="help-row d-none">
                        <span>Type 2</span>
                        <span class="type2"></span>
                    </div>
                </div>
            <div class="row">    
                    <div class="solve-riddle m-2">
                        <label for="solution">Pokemon eingeben!</label>
                        <input type="text" id="solution">
                        <span class="input-error d-none">!</span>
                        <button type="submit" class="btn btn-danger">Abschicken</button>
                    </div>
                </div>
            <h2 class="solution d-none"></h2>

            <button type="button" class="btn btn-warning m-3" id="giveUp">Ich gebe auf und will ein neues Mon!</button>
            <div class="filter-settings">
                <fieldset>
                    <legend>Verfügbare Pokemon einschränken:</legend>
                    <select class="form-select" id="tier">
                        <option selected>Alle</option>
                    </select>
                </fieldset>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="reloadModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
              </div>
              <div class="modal-body">                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary reload" id="modalNew" data-bs-dismiss="modal">Neues Pokemon</button>
              </div>
            </div>
          </div>
        </div>

        <div class="impressum">
            <p>Anfragen und Verbesserungsvorschläge bitte entweder an 
                <a href="mailto:leoniekrenzer96@gmail.com">leoniekrenzer96@gmail.com</a>
                , oder auf 
                <a href="https://github.com/Leoniebra/PokemonStatQuiz" target="_blank" title="Github Project for this page">
                    GitHub
                </a>
            </p>
        </div>
    </body>
</html>