export class EventtypeModel {
  id: string;
  name: string;

  static cloneBase(type: EventtypeModel): EventtypeModel{
    const typeClone: EventtypeModel = new EventtypeModel();
    typeClone.id = type.id;
    typeClone.name = type.name;
    return typeClone;
  }
}
