import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notifications';

describe('Send notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const recipientId = 'any_recipient_id';
    const content = 'any_content';
    const category = 'any_category';

    const { notification } = await sendNotification.execute({
      recipientId,
      content,
      category,
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
