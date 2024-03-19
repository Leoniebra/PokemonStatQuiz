<!DOCTYPE html>
<html>
    <head>
        <script src="js/main.js" ></script>
        <script src="js/pokedex.js" ></script>
        <script src="bootstrap-5.0.2-dist/js/bootstrap.js"></script>
        <link rel="stylesheet" href="css/bars.css">
    </head>
    <body>
        <h2>Pokemon Stat Quiz</h2>
        <div class="row">
        <div class="column">
            <div class="stat-wrapper">
                <div class="stat-label">HP</div><div class="stat js-hp"></div><div class="stat-value js-hp-value d-none"></div>
            </div>
            <div class="stat-wrapper">
                <div class="stat-label">atk</div><div class="stat js-atk"></div><div class="stat-value js-atk-value d-none"></div>
            </div>
            <div class="stat-wrapper">
                <div class="stat-label">def</div><div class="stat js-def"></div><div class="stat-value js-def-value d-none"></div>
            </div>
            <div class="stat-wrapper">
                <div class="stat-label">spa</div><div class="stat js-spa"></div><div class="stat-value js-spa-value d-none"></div>
            </div>
            <div class="stat-wrapper">
                <div class="stat-label">spd</div><div class="stat js-spd"></div><div class="stat-value js-spd-value d-none"></div>
            </div>
            <div class="stat-wrapper">
                <div class="stat-label">spe</div><div class="stat js-spe"></div><div class="stat-value js-spe-value d-none"></div>
            </div>
        </div>
        <div class="column">
            <button class="btn js-show-values">Werte anzeigen</button>
            <button class="btn js-show-help">Hilfe anzeigen</button>
            <div class="solve-riddle">
                <label for="solution">Pokemon eingeben!</label>
                <input type="text" id="solution"/>
            </div>
        </div>
        <div class="column">
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
    </div>
        <h2 class="solution d-none"></h2>

        <button class="reload">neues mon</button>
    </body>
</html>