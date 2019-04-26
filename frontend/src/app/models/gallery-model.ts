import {RoomModel} from "./room-model";

export class GalleryModel {
  id: string;
  photo: string;
  room: RoomModel;

  static cloneBase(gallery: GalleryModel): GalleryModel{
    const galleryClone: GalleryModel = new GalleryModel();
    galleryClone.id = gallery.id;
    galleryClone.photo = gallery.photo;
    galleryClone.room = gallery.room;
    return galleryClone;
  }

}
