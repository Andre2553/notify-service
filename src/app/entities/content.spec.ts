import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a content', () => {
    const content = new Content('any_content');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a content with less than 5 characters', () => {
    expect(() => {
      new Content('less');
    }).toThrow();
  });

  it('should not be able to create a content with more than 240 characters', () => {
    expect(() => {
      new Content('a'.repeat(241));
    }).toThrow();
  });
});
