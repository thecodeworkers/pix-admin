import { DispatchProps, AuthState } from '../../types';

const initialState: AuthState = {
  isAuth: false
};

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    

    default:
    return state
  }
}
