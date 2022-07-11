import { getLocationCoord } from '../../src/controller/weatherController';

describe('Weather Controller tests', () => {
  test('getLocationCoord', async () => {
    const res = await getLocationCoord({ city: 'London', state: '', country: 'GB' }, 1);
    console.log('Test res: ', res);
    expect(res).toEqual({ lat: 51.5073219, lon: -0.1276474 });
  });
});
