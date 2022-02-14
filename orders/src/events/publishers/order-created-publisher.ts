import { Publisher, OrderCreatedEvent, Subjects } from '@khticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
