import { Router } from "express";
import { projectController } from "./controllers/projectController";
import {body, param} from 'express-validator'
import { write } from "fs";
import { handleInputErrors } from "../middleware/validation";

const router = Router()

router.post('/', 

        body('projectName')
        .notEmpty().withMessage('El nombre del proyecto es obligatorio...'),
        body('clientName')
        .notEmpty().withMessage('El nombre del cliente es obligatorio...'),
        body('description')
        .notEmpty().withMessage('La descripcion debe ser obligatoria...'),

        handleInputErrors,

    projectController.createProject)
router.get('/', projectController.getAllProjects)

router.get('/:id', 
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    projectController.getProjectById)


export default router