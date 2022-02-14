import { Publisher, Subjects, TicketCreatedEvent } from '@khticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
