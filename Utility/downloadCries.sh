## This script will download the cry for each pokemon from pokemon showdown and put it into a subfolder ##

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $SCRIPT_DIR || exit 1;

mkdir -p ../PokemonData/pokemonCries

curl "https://play.pokemonshowdown.com/data/pokedex.json" > ../PokemonData/pokedex.json

for name in $( < ../PokemonData/pokedex.json jq ".[] | .name" | sed "s| ||g" | awk '{print tolower($0)}' | grep -o "[^\"]*" ); do
    curl https://play.pokemonshowdown.com/audio/cries/${name}.mp3 > ../PokemonData/pokemonCries/${name}.mp3
done
