export const FormTypes = {
  SET_FIRST_NAME: "SET_FIRST_NAME",
  SET_LAST_NAME: "SET_LAST_NAME",
  SET_SSN_NUMBER: "SET_SSN_NUMBER",
  SET_DEPENDENCIES: "SET_DEPENDENCIES",
  SET_DEPENDENT_NAME: "SET_DEPENDENT_NAME",
  SET_MARITAL_STATUS: "SET_MARITAL_STATUS",
  SET_CHILDREN: "SET_CHILDREN",
  SET_FULL_FORM_DONE: "SET_FULL_FORM_DONE",
  RESET_FORM: "RESET_FORM",
};

export const setFirstName = (firstName) => ({
  type: FormTypes.SET_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName) => ({
  type: FormTypes.SET_LAST_NAME,
  payload: lastName,
});

export const setSSNNumber = (ssnNumber) => ({
  type: FormTypes.SET_SSN_NUMBER,
  payload: ssnNumber,
});

export const setDependencies = (dependencies) => ({
  type: FormTypes.SET_DEPENDENCIES,
  payload: dependencies,
});

export const setDependentName = (nameOfDependent) => ({
  type: FormTypes.SET_DEPENDENT_NAME,
  payload: nameOfDependent,
});

export const setMaritalStatus = (maritalStatus) => ({
  type: FormTypes.SET_MARITAL_STATUS,
  payload: maritalStatus,
});

export const setChildren = (children) => ({
  type: FormTypes.SET_CHILDREN,
  payload: children,
});

export const setFullFormDone = (formDone) => ({
  type: FormTypes.SET_FULL_FORM_DONE,
  payload: formDone,
});

export const setResetForm = () => ({
  type: FormTypes.RESET_FORM,
});
