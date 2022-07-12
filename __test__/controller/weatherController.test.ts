import { getLocationCoord, getForecast } from '../../src/controller/weatherController';
import { Units } from '../../src/model/weatherModel';

describe('Weather Controller tests', () => {
  test('getLocationCoord', async () => {
    const res = await getLocationCoord({ city: 'London', state: '', country: 'GB' }, 1);
    // console.log('Test res: ', res);
    expect(res).toEqual({ lat: 51.5073219, lon: -0.1276474 });
  });

  test('getForecast', async () => {
    const res = await getForecast({ lat: 51.5073219, lon: -0.1276474 }, 'metric', 'se');
    // console.log('Forecast: ', res);
    expect(res.cod).toBe('200');
    expect(res.list.length).toEqual(res.cnt);
    // console.log('lat: ', res.city);
    expect(Number.parseFloat(res.city.coord.lat.toString())).toBeCloseTo(51.5073219, 4);
    expect(Number.parseFloat(res.city.coord.lon.toString())).toBeCloseTo(-0.1276474, 4);
  });

  test('getCurrent', async () => {});
});
