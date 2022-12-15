import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notification-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.notifications.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }
  async save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex(
      (notification) => notification.id === notification.id,
    );
    if (index >= 0) {
      this.notifications[index] = notification;
    }
  }
  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }
}
