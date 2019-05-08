import {UserModel, UserSafeModel} from "./user-model";
import {RoomModel} from "./room-model";

export class ReservationModel {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  personCount: number;
  user: UserSafeModel;
  room: RoomModel;
  hasBabyBed: boolean;
  hasTv: boolean;
  hasBath: boolean;
  hasFridge: boolean;

  static cloneBase(reserv: ReservationModel): ReservationModel{
    const reservClone: ReservationModel = new ReservationModel();
    reservClone.id = reserv.id;
    reservClone.dateFrom = reserv.dateFrom;
    reservClone.dateTo = reserv.dateTo;
    reservClone.personCount = reserv.personCount;
    reservClone.user = reserv.user;
    reservClone.room = reserv.room;
    reservClone.hasBabyBed = reserv.hasBabyBed;
    reservClone.hasTv = reserv.hasTv;
    reservClone.hasBath = reserv.hasBath;
    reservClone.hasFridge = reserv.hasFridge;
    return reservClone;
  }

}
