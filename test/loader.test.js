
import webpack from './helpers/compiler';

describe('Loader', () => {
  test('Defaults', async () => {
    const config = {
      loader: {
        test: /(ts)/,
        options: {
            name: '[path][name].wasm'
        }
      },
    };
    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[1];

    expect(source).toMatchSnapshot();
  });
});
