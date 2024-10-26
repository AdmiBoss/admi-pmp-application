import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 2687,
  login: 'wRcu',
};

export const sampleWithPartialData: IUser = {
  id: 16491,
  login: 'ay1.v9',
};

export const sampleWithFullData: IUser = {
  id: 9011,
  login: 'HTKvbp',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
