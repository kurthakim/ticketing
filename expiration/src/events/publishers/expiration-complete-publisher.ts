import { Subjects, Publisher, ExpirationCompleteEvent } from '@khticket/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
