const soma = (req,res) => {
    const soma = 100+10;

    res.send({soma: soma})
}

module.exports = {soma}