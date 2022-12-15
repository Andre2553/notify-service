import { Notification } from '../entities/notification';
import { SendNotification } from './send-notifications';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};
describe('Send notifications', () => {
  it('should be able to send a notification', async () => {
    // const prisma = new PrismaService();
    const sendNotification = new SendNotification(notificationsRepository);

    const recipientId = 'any_recipient_id';
    const content = 'any_content';
    const category = 'any_category';

    await sendNotification.execute({
      recipientId,
      content,
      category,
    });
    expect(notifications).toHaveLength(1);
  });
});
