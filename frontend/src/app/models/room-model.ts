export class RoomModel {
  id: string;
  price: string;
  roomType: string;
  maxPersons: string;
  isActive: boolean;
  hasBabyBed: boolean;
  hasTv: boolean;
  hasBath: boolean;
  hasFridge: boolean;

  static cloneBase(room: RoomModel): RoomModel{
    const cloneRoom: RoomModel = new RoomModel();
    cloneRoom.id = room.id;
    cloneRoom.price = room.price;
    cloneRoom.maxPersons = room.maxPersons;
    cloneRoom.isActive = room.isActive;
    cloneRoom.hasBabyBed = room.hasBabyBed;
    cloneRoom.hasTv = room.hasTv;
    cloneRoom.hasBath = room.hasBath;
    cloneRoom.roomType = room.roomType;
    cloneRoom.hasFridge = room.hasFridge;
    return cloneRoom;
  }

}
