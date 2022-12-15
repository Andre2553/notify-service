import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { UnreadNotification } from './Unread-notification';

describe('Read notifications', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const noticification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(noticification);

    await unreadNotification.execute({
      notificationId: noticification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });
  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    await expect(
      unreadNotification.execute({
        notificationId: 'non_existing_notification_id',
      }),
    ).rejects.toThrowError('Notification not found');

    expect(notificationsRepository.notifications).toEqual([]);
  });
});
