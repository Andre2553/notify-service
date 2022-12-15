import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CancelNotification } from './cancel-notification';

describe('Cancel notifications', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const noticification = makeNotification();

    await notificationsRepository.create(noticification);

    await cancelNotification.execute({
      notificationId: noticification.id,
    });

    expect(notificationsRepository.notifications[0].createdAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    await expect(
      cancelNotification.execute({
        notificationId: 'non_existing_notification_id',
      }),
    ).rejects.toThrowError('Notification not found');

    expect(notificationsRepository.notifications).toEqual([]);
  });
});
