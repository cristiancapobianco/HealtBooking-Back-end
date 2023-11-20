const { Specialty, Sure } = require('../db')



const sure = [
    {
        "id": 1,
        "name": "OSDE"
    },
    {
        "id": 2,
        "name": "Swiss Medical"
    },
    {
        "id": 3,
        "name": "Medifé"
    },
    {
        "id": 4,
        "name": "Galeno"
    },
    {
        "id": 5,
        "name": "Sancor Salud"
    }
]

const specialty = [
    {
        "id": 1,
        "name": "Neurocirugía"

    },
    {
        "id": 2,
        "name": "Radiología e Imágenes Médicas"
    },
    {
        "id": 3,
        "name": "Neumonología"

    },
    {
        "id": 4,
        "name": "Endocrinología y Nutrición"

    },
    {
        "id": 5,
        "name": "Geriatría"

    },
    {
        "id": 6,
        "name": "Ginecología y Obstetricia"

    },
    {
        "id": 7,
        "name": "Cardiología"

    },
    {
        "id": 8,
        "name": "Cirugía Ortopédica y Traumatología"

    },
    {
        "id": 9,
        "name": "Oftalmología"

    },
    {
        "id": 10,
        "name": "Otorrinolaringología"
    }
]

const bulker = (req, res) => {
    try {
        Specialty.bulkCreate(specialty)
        Sure.bulkCreate(sure)
        res.send("bulk exitoso")
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    bulker
}