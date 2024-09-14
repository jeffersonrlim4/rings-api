import RingRepository from '../repositories/RingRepository';

class RingService {
  async create(data: any) {
    const maxRings: any = {
      Elfos: 3,
      Anões: 7,
      Homens: 9,
      Sauron: 1,
    };

    const count = await RingRepository.countRingsByForjadoPor(data.forjadoPor);
    if (count >= maxRings[data.forjadoPor]) {
      throw new Error(`Não é possível criar mais anéis para ${data.forjadoPor}.`);
    }

    return await RingRepository.create(data);
  }

  async getAll() {
    return await RingRepository.findAll();
  }

  async update(id: number, data: any) {
    return await RingRepository.update(id, data);
  }

  async delete(id: number) {
    return await RingRepository.delete(id);
  }
}

export default new RingService();
