import {UserModel, UserSafeModel} from "./user-model";
import {EventModel} from "./event-model";

export class EventrecordModel {
  id: string;
  personCount: number;
  user: UserSafeModel;
  event: EventModel;

  static cloneBase(record: EventrecordModel): EventrecordModel{
    const recordClone: EventrecordModel = new EventrecordModel();
    recordClone.id = record.id;
    recordClone.personCount = record.personCount;
    recordClone.user = record.user;
    recordClone.event = record.event;
    return recordClone;
  }

}
