const express = require('express')
const vaccineController = require('./controllers/vaccine.controllers')
const router  = express.Router()


// Middleware
router.use(function timeLog(req , res , next){
    console.log(`NOW -> ${new Date()}`);
    next()
})

router.get("/", vaccineController.getVaccine)
// router.get("/query",vaccineController.getVaccineByQuery)
router.get("/:id",vaccineController.getVaccineById)
router.post("/postData",vaccineController.createVaccine)
router.put("/Update/:id",vaccineController.UpdateVaccine)
router.delete("/Remove/:id",vaccineController.DeletetVaccine)

module.exports = router
