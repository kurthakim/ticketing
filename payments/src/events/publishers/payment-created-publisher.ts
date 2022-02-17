import { Subjects, Publisher, PaymentCreatedEvent } from '@khticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
