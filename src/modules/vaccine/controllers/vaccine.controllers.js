const humps = require("humps")
const VaccineService = require("../services/vaccine.service")

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
    async getVaccine(req, res) {
        const found = await VaccineService.getAll()
        res.json({
            suaccess: true,
            data: found
        }).status(200)
    },
    // async getVaccineByQuery(){
    //     const {quantity , quanlity} = humps.camelizeKeys(req.query)
    //     const query = {
    //         quanlity: quanlity ? { $gte: quanlity } : { $ne: null },
    //         quantity: quantity || {$ne:null}
    //     }
    //     const found = await VaccineService.getAll(query)
    //     res.json({
    //         suaccess: true,
    //         data: found
    //     }).status(200)
    // },

    async getVaccineById(req, res) {
        const { id } = req.params
        const found = await VaccineService.getById(id)
        res.json({
            suaccess: true,
            data: found
        }).status(200)
    },

    async createVaccine(req, res) {
        const { name, quantity , quanlity} = humps.camelizeKeys(req.body)
        const create = await VaccineService.create({name, quantity , quanlity })
        res.json({
            suaccess: true,
            data: create
        }).status(201)
    },

    async UpdateVaccine(req, res) {
        const { id } = req.params
        const updateVaccine = await VaccineService.updateVaccine(id,req.body)
        if(!updateVaccine){
            return res.status(404).send("Vaccine not found");
        }
        res.json({
            suaccess: true,
            data: updateVaccine
        }).status(200)
    },

    async DeletetVaccine(req,res){
        const {id} = req.params
        const found = await VaccineService.deleteVaccine(id)
        const viewAll = await VaccineService.getAll()
        if  (!found){
            res.status(404).send("Vaccine not found")
        }
        // const index = vaccine.indexOf(found) // หา index ของวัคซีนที่ต้องการลบในอาร์เรย์ vaccine
        // vaccine.splice(index,1) // ลบข้อมูลที่อยู่ที่ index ที่พบ
        res.status(200).json({
            suaccess: true,
            data: viewAll
        })
    }

}

module.exports = vaccineController