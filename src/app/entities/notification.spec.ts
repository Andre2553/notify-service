import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'any_recipient_id',
      content: new Content('any_content'),
      category: 'any_category',
    });

    expect(notification).toBeTruthy();
  });

  it('should not be able to create a notification with invalid recipientId', () => {
    expect(() => {
      new Notification({
        recipientId: '',
        content: new Content('any_content'),
        category: 'any_category',
      });
    }).toThrow();
  });

  it('should not be able to create a notification with invalid content', () => {
    expect(() => {
      new Notification({
        recipientId: 'any_recipient_id',
        content: new Content(''),
        category: 'any_category',
      });
    }).toThrow();
  });

  it('should not be able to create a notification with invalid category', () => {
    expect(() => {
      new Notification({
        recipientId: 'any_recipient_id',
        content: new Content('any_content'),
        category: '',
      });
    }).toThrow();
  });

  it('should be able to create a notification with readAt', () => {
    const notification = new Notification({
      recipientId: 'any_recipient_id',
      content: new Content('any_content'),
      category: 'any_category',
      readAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });

  it('should be able to create a notification with createdAt', () => {
    const notification = new Notification({
      recipientId: 'any_recipient_id',
      content: new Content('any_content'),
      category: 'any_category',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
