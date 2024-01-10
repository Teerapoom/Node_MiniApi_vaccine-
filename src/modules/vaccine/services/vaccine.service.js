const VaccineDocument = require('../model/vaccine.schema')
const StatusEnum = require("../../../common/status.enum")

const VaccineService = {
    create(payload){
        return new VaccineDocument(payload).save()
    },

    getAll(query){
        return VaccineDocument.find({...query,status: StatusEnum.ACTIVE})
    },

    getById(id){
        return VaccineDocument.findOne({_id:id})
    },

    updateVaccine(id , newVaccine){
        return VaccineDocument.findByIdAndUpdate(id, newVaccine, { new: true })
    },

    deleteVaccine(id){
        return VaccineDocument.deleteOne({_id:id})
    }

}

module.exports = VaccineService