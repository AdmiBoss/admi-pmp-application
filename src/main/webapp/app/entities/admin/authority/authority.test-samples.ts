import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '1f90ae86-34df-4e5d-95b7-dd286d7d2b8e',
};

export const sampleWithPartialData: IAuthority = {
  name: 'ce914ed3-1d3d-49e6-afcc-3d35741e934b',
};

export const sampleWithFullData: IAuthority = {
  name: 'bfe8270e-c7fa-4516-b8dd-ba88054084d4',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
