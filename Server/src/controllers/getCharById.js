const axios = require('axios');
// const URL = "`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}";

function getCharById (req, res){

    const { id } = req.params;


    axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`)
    .then((response) => {
        
        let {id, name, status, species, type, gender, origin, location, image} = response.data;
        
        const character = {
            id,
            name,
            status,
            species,
            type,
            gender,
            origin,
            location,
            image,
        }

        return character.name
        ? res.json(character)
        : res.status(404).json({ error: 'Character not found' });
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify(character));
        
    })

    .catch((reason) => {
        // res.writeHead(500, { 'Content-Type': 'text/plain' });
        // res.end(error.message);
        return res.send(500).json({ error: reason.message });
    })
}

module.exports = { getCharById };
