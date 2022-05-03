import State from '../../database/models/address/State';
import City from '../../database/models/address/City';

class StateRepository {
  async findByPk(stateId) {
    const state = await State.findByPk(stateId);
    return state;
  }

  async listStates() {
    const states = await State.findAll({
      attributes: ['id', 'name', 'initials'],
    });
    return states;
  }

  async listCitiesInState({ stateId }) {
    const cities = await City.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: State,
          as: 'state',
          where: { id: stateId },
          attributes: ['id', 'name', 'initials'],
        },
      ],
    });

    return cities;
  }
}

export default StateRepository;
