import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { ReadNotification } from './Read-notification';

describe('Read notifications', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const noticification = makeNotification();

    await notificationsRepository.create(noticification);

    await readNotification.execute({
      notificationId: noticification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    await expect(
      readNotification.execute({
        notificationId: 'non_existing_notification_id',
      }),
    ).rejects.toThrowError('Notification not found');

    expect(notificationsRepository.notifications).toEqual([]);
  });
});
