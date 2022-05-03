export const idValid = (id) => !Number.isNaN(id) && Number.isInteger(+id) && typeof id !== 'object';
