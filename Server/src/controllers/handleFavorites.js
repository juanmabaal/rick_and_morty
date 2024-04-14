let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);

    return res.json(myFavorites);
}

const deletFav = (req, res) => {
    const { id } = req.params;

    const deleteChar = myFavorites.filter ((char) => {
        return char.id !== id;
    })

    myFavorites = deleteChar

    return res.json(myFavorites)
}

module.exports = { postFav, myFavorites }