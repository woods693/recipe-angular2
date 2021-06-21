import { ArrayCreatorPipe } from './array-creator.pipe';

describe('ArrayCreatorPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayCreatorPipe();
    expect(pipe).toBeTruthy();
  });
});
