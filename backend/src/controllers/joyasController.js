const { obtenerJoyas, Hateos, obtenerJoya, obtenerJoyasPorFiltros } = require('../models/joyasModels');



const consultas = {



    getJoyas: async (req, res) => {
        try {
            const queryString = req.query;
            const listadoJoyas = await obtenerJoyas(queryString);
            const formatHateos = await Hateos(listadoJoyas)
            res.status(200).json(formatHateos);
        }
        catch (error) {
            res.status(500).send('Ha ocurrido un problema, intentelo más tarde')
        }

    },


    getJoya: async (req, res) => {
        try {
            const { id } = req.params;
            const joya = await obtenerJoya(id)
            res.status(200).json(joya)
        } catch (error) {
            res.status(500).send('Ha ocurrido un problema, intentelo más tarde');
        }
    },

    getFiltros: async (req, res) => {
        try {
            const queryStrings = req.query
            const joyas = await obtenerJoyasPorFiltros(queryStrings)
            res.json(joyas)
        } catch (e) {
            res.status(500).send(e.message);
        }

    }
}

module.exports = consultas;