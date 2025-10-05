import Ajv, { ValidateFunction } from 'ajv';
import ProjectSchema from '../projects.schema.json';

const ajv = new Ajv();
let compiledValidator: ValidateFunction | null = null;

export const validateProjects = async (data: unknown): Promise<boolean> => {
    if (!compiledValidator) {
        const schemaValid = ajv.validateSchema(ProjectSchema);
        if (!schemaValid) {
            console.error('Project schema invalid: ', ajv.errors);
            return false;
        }
        compiledValidator = ajv.compile(ProjectSchema);
    }

    try {
        const valid = compiledValidator(data) as boolean;
        if (!valid) {
            console.error(compiledValidator.errors);
        }
        return valid;
    } catch (err) {
        console.error(err);
        return false;
    }
};