import { Publisher, OrderCancelledEvent, Subjects } from '@khticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
