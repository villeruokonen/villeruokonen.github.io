import Ajv from "ajv";
import ProjectSchema from '../projects.schema.json';

export const validateProjects = (data: unknown): boolean => 
{
    const ajv = new Ajv(); 
    const schemaValid = ajv.validateSchema(ProjectSchema);
    if (!schemaValid) {
        console.log("Project schema invalid: " + ajv.errors);
    }
    const valid = ajv.validate(ProjectSchema, data)
    if (!valid)
        console.log(ajv.errors);

    return valid;
}