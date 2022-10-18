import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';
import adminReducer from '../features/admin/adminSlice';
import incubationReducer from '../features/incubation/incubationSlice';
import companyReducer from '../features/company/companySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    users: adminReducer,
    inc:incubationReducer,
    companies:companyReducer,

  },
});
// redux is used here to export globally users,auth,goals.
// store saves the state of the app and when there is action(action.payload in slice.) reducer updates the state of the app.