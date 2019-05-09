export class RoomModel {
  id: string;
  price: number;
  roomType: string;
  maxPersons: number;
  isActive: number;
  hasBabyBed: number;
  hasTv: number;
  hasBath: number;
  hasFridge: number;

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
