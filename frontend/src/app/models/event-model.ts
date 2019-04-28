export class EventModel {
  id: string;
  eventType: string;
  name: string;
  description: string;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  price: number;
  maxPersons: number;
  logoUrl: string;

  static cloneBase(event: EventModel): EventModel{
    const eventClone: EventModel = new EventModel();
    eventClone.id = event.id;
    eventClone.name = event.name;
    eventClone.description = event.description;
    eventClone.dateTimeStart = event.dateTimeStart;
    eventClone.dateTimeEnd = event.dateTimeEnd;
    eventClone.price = event.price;
    eventClone.maxPersons = event.maxPersons;
    eventClone.logoUrl = event.logoUrl;
    eventClone.eventType = event.eventType;
    return eventClone;
  }

}
