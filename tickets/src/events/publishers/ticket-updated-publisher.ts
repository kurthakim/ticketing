import { Publisher, Subjects, TicketUpdatedEvent } from '@khticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
