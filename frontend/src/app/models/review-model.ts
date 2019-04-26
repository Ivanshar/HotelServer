import {ReservationModel} from "./reservation-model";

export class ReviewModel {
  id: string;
  mark: number;
  comment: string;
  reservation: ReservationModel;

  static cloneBase(rev: ReviewModel): ReviewModel{
    const revClone: ReviewModel = new ReviewModel();
    revClone.id = rev.id;
    revClone.mark = rev.mark;
    revClone.comment = rev.comment;
    revClone.reservation = rev.reservation;
    return revClone;
  }

}
