import Ajv from "ajv";
import ProjectSchema from '../projects.schema.json';

export const validateProjects = async (data: unknown): Promise<boolean> => {
    const ajv = new Ajv();
    const schemaValid = ajv.validateSchema(ProjectSchema);
    if (!schemaValid) {
        console.log("Project schema invalid: " + ajv.errors);
    }
    try {
        const valid = await ajv.validate(ProjectSchema, data)
        if (!valid)
            console.log(ajv.errors);

        return valid;
    }
    catch (err: any) {
        console.error(err);
        return false;
    }
}