import { FormTypes } from "./formActions";
const initialState = {
  firstName: "",
  lastName: "",
  ssnNumber: "",
  dependencies: null,
  nameOfDependent: "",
  maritalStatus: null,
  children: null,
  fullFormDone:null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FormTypes.SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case FormTypes.SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case FormTypes.SET_SSN_NUMBER:
      return { ...state, ssnNumber: action.payload };
    case FormTypes.SET_DEPENDENCIES:
      return { ...state, dependencies: action.payload };
    case FormTypes.SET_DEPENDENT_NAME:
      return { ...state, nameOfDependent: action.payload };
    case FormTypes.SET_MARITAL_STATUS:
      return { ...state, maritalStatus: action.payload };
    case FormTypes.SET_CHILDREN:
      return { ...state, children: action.payload };
    case FormTypes.SET_FULL_FORM_DONE:
      return { ...state, fullFormDone: action.payload };
    case FormTypes.RESET_FORM:
      return initialState;
    default:
      return state;
  }
};
export default userReducer;
