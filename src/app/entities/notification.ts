import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  cancelledAt?: Date | null;
  createdAt?: Date;
}
export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }
  public get id(): string {
    return this._id;
  }
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }
  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }
  public read() {
    this.props.readAt = new Date();
  }
  public get readAt(): Date | null {
    return this.props.readAt;
  }
  public unread() {
    this.props.readAt = null;
  }
  public cancel() {
    return (this.props.cancelledAt = new Date());
  }
  public get cancelledAt(): Date | null {
    return this.props.cancelledAt;
  }
  public set createdAt(createdAt: Date | null) {
    this.props.createdAt = createdAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
