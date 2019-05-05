import {UserModel, UserSafeModel} from "./user-model";
import {EventModel} from "./event-model";

export class EventrecordModel {
  id: string;
  timeFrom: Date;
  timeTo: Date;
  user: UserSafeModel;
  event: EventModel;

  static cloneBase(record: EventrecordModel): EventrecordModel{
    const recordClone: EventrecordModel = new EventrecordModel();
    recordClone.id = record.id;
    recordClone.timeFrom = record.timeFrom;
    recordClone.timeTo = record.timeTo;
    recordClone.user = record.user;
    recordClone.event = record.event;
    return recordClone;
  }

}
