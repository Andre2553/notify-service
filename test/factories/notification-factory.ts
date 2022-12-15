import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

export function makeNotification(override: Partial<NotificationProps> = {}) {
  return new Notification({
    recipientId: 'any_recipient_id',
    content: new Content('any_content'),
    category: 'any_category',
    ...override,
  });
}
