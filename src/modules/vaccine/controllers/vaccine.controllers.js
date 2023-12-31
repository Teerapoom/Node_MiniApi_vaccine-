const humps = require("humps")

const vaccine = [
    {
        id: "001",
        name: "Sinovac",
        responsibility: 30
    },
    {
        id: "002",
        name: "Aztrazeneca",
        responsibility: 45
    },
    {
        id: "003",
        name: "Moderna",
        responsibility: 90
    },
    {
        id: "004",
        name: "Sinophar",
        responsibility: 70
    },
    {
        id: "005",
        name: "Pfizer",
        responsibility: 95
    }
]

const vaccineController = {
    getVaccine(req, res) {
        const responsibility = req?.query?.responsibility || 0
        const found = vaccine.filter((vaccine) => vaccine.responsibility >= +responsibility)
        res.json({
            suaccess: true,
            data: found
        }).status(200)
    },

    getVaccineById(req, res) {
        const { id } = req.params
        const found = vaccine.find((vaccine) => vaccine.id === id)
        res.json({
            suaccess: true,
            data: found
        }).status(200)
    },

    createVaccine(req, res) {
        const { id, name, responsibility } = req.body
        vaccine.push({ id, name, responsibility })

        res.json({
            suaccess: true,
            data: vaccine
        }).status(201)
    },

    UpdateVaccine(req, res) {
        const { id } = req.params
        const found = vaccine.find((vaccine) => vaccine.id === id) //เก็บ ก้อน data
        if (!found) {
            res.status(404).send("Vaccine not found")
        }
        const { name, responsibility } = req.body // vaccine.name

        found.name = name || found.name
        found.responsibility = responsibility || found.responsibility

        res.status(200).json(
            {
                suaccess: true,
                data: vaccine
            }
        )
    },

    DeletetVaccine(req,res){
        const {id} = req.params
        const found = vaccine.find((vaccine) => vaccine.id === id)
        if  (!found){
            res.status(404).send("Vaccine not found")
        }
        const index = vaccine.indexOf(found) // หา index ของวัคซีนที่ต้องการลบในอาร์เรย์ vaccine
        vaccine.splice(index,1) // ลบข้อมูลที่อยู่ที่ index ที่พบ
        res.status(200).json({
            suaccess: true,
            data: vaccine
        })
    }

}

module.exports = vaccineController