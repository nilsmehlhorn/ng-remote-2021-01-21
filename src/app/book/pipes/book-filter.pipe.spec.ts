import { BookFilterPipe } from './book-filter.pipe';

describe('BookFilterPipe', () => {
  fit('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
