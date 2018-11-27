import Joi from 'joi';

const locationsSchema = {
  name: Joi.string()
    .min(3)
    .required(),
  maleResidents: Joi.number().required(),
  femaleResidents: Joi.number().required(),
  relativeLocationId: Joi.string(),
};

export default locationsSchema;
