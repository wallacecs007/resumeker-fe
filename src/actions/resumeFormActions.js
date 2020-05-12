export const resumeFormConstants = {
  FORM_ADD_DATA_REQUEST: "FORM_ADD_DATA_REQUEST",
  FORM_ADD_DATA_SUCCESS: "FORM_ADD_DATA_SUCCESS",
  FORM_ADD_DATA_FAILURE: "FORM_ADD_DATA_FAILURE",

  FORM_ADD_WORK_DATA_REQUEST: "FORM_ADD_WORK_DATA_REQUEST",
  FORM_ADD_WORK_DATA_SUCCESS: "FORM_ADD_WORK_DATA_SUCCESS",
  FORM_ADD_WORK_DATA_FAILURE: "FORM_ADD_WORK_DATA_FAILURE",

  FORM_UPDATE_WORK_DATA_REQUEST: "FORM_UPDATE_WORK_DATA_REQUEST",
  FORM_UPDATE_WORK_DATA_SUCCESS: "FORM_UPDATE_WORK_DATA_SUCCESS",

  FORM_ADD_EDUCATION_DATA_REQUEST: "FORM_ADD_EDUCATION_DATA_REQUEST",
  FORM_ADD_EDUCATION_DATA_SUCCESS: "FORM_ADD_EDUCATION_DATA_SUCCESS",
  FORM_ADD_EDUCATION_DATA_FAILURE: "FORM_ADD_EDUCATION_DATA_FAILURE",

  FORM_ADD_PROJECT_DATA_REQUEST: "FORM_ADD_PROJECT_DATA_REQUEST",
  FORM_ADD_PROJECT_DATA_SUCCESS: "FORM_ADD_PROJECT_DATA_SUCCESS",
  FORM_ADD_PROJECT_DATA_FAILURE: "FORM_ADD_PROJECT_DATA_FAILURE",

  FORM_ADD_TECH_SKILLS_DATA_REQUEST: "FORM_ADD_TECH_SKILLS_DATA_REQUEST",
  FORM_ADD_TECH_SKILLS_DATA_SUCCESS: "FORM_ADD_TECH_SKILLS_DATA_SUCCESS",
  FORM_ADD_TECH_SKILLS_DATA_FAILURE: "FORM_ADD_TECH_SKILLS_DATA_FAILURE",

  FORM_ADD_LANGUAGE_DATA_REQUEST: "FORM_ADD_LANGUAGE_DATA_REQUEST",
  FORM_ADD_LANGUAGE_DATA_SUCCESS: "FORM_ADD_LANGUAGE_DATA_SUCCESS",
  FORM_ADD_LANGUAGE_DATA_FAILURE: "FORM_ADD_LANGUAGE_DATA_FAILURE",
  
  FORM_ADD_HOBBY_DATA_REQUEST: "FORM_ADD_HOBBY_DATA_REQUEST",
  FORM_ADD_HOBBY_DATA_SUCCESS: "FORM_ADD_HOBBY_DATA_SUCCESS",
  FORM_ADD_HOBBY_DATA_FAILURE: "FORM_ADD_HOBBY_DATA_FAILURE",

  FORM_ADD_GENERAL_SKILLS_DATA_REQUEST: "FORM_ADD_GENERAL_SKILLS_DATA_REQUEST",
  FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS: "FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS",
  FORM_ADD_GENERAL_SKILLS_DATA_FAILURE: "FORM_ADD_GENERAL_SKILLS_DATA_FAILURE",

  FORM_UPDATE_EDUCATION_DATA_REQUEST: "FORM_UPDATE_EDUCATION_DATA_REQUEST",
  FORM_UPDATE_EDUCATION_DATA_SUCCESS: "FORM_UPDATE_EDUCATION_DATA_SUCCESS",

  FORM_UPDATE_PROJECT_DATA_REQUEST: "FORM_UPDATE_PROJECT_DATA_REQUEST",
  FORM_UPDATE_PROJECT_DATA_SUCCESS: "FORM_UPDATE_PROJECT_DATA_SUCCESS",

  FORM_UPDATE_TECH_SKILLS_DATA_REQUEST: "FORM_UPDATE_TECH_SKILLS_DATA_REQUEST",
  FORM_UPDATE_TECH_SKILLS_DATA_SUCCESS: "FORM_UPDATE_TECH_SKILLS_DATA_SUCCESS",

  FORM_UPDATE_GENERAL_SKILLS_DATA_REQUEST: "FORM_UPDATE_GENERAL_SKILLS_DATA_REQUEST",
  FORM_UPDATE_GENERAL_SKILLS_DATA_SUCCESS: "FORM_UPDATE_GENERAL_SKILLS_DATA_SUCCESS",

  FORM_UPDATE_LANGUAGE_DATA_REQUEST: "FORM_UPDATE_LANGUAGE_DATA_REQUEST",
  FORM_UPDATE_LANGUAGE_DATA_SUCCESS: "FORM_UPDATE_LANGUAGE_DATA_SUCCESS",
}



export const addData = (resumeData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_DATA_REQUEST });

  dispatch({
    type: resumeFormConstants.FORM_ADD_DATA_SUCCESS,
    payload: resumeData,
  });
};

export const addWorkData = (workData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_WORK_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_WORK_DATA_SUCCESS,
    payload: workData,
  });
};

export const updateWorkData = (workData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_WORK_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_WORK_DATA_SUCCESS,
    payload: workData,
  });
};

export const addProjectData = (projectData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_PROJECT_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_PROJECT_DATA_SUCCESS, payload: projectData})
}


export const updateProjectData = (projectData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_PROJECT_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_PROJECT_DATA_SUCCESS,
    payload: projectData,
  });
};

export const addGeneralSkill = (skillData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS, payload: skillData})
}

export const updateGeneralSkillsData = (generalSkillsData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_GENERAL_SKILLS_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_GENERAL_SKILLS_DATA_SUCCESS,
    payload: generalSkillsData,
  });
};

export const addTechSkill = (skillData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_SUCCESS, payload: skillData})
}

export const updateTechSkillsData = (techSkillsData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_TECH_SKILLS_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_TECH_SKILLS_DATA_SUCCESS,
    payload: techSkillsData,
  });
};

export const addEducationData = (educationData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_EDUCATION_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_EDUCATION_DATA_SUCCESS,
    payload: educationData,
  });
};

export const updateEducationData = (educationData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_EDUCATION_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_EDUCATION_DATA_SUCCESS,
    payload: educationData,
  });
};

export const addLanguage = (languageData) => dispatch => {
  dispatch({type: resumeFormConstants.FORM_ADD_LANGUAGE_DATA_REQUEST})
  dispatch({type: resumeFormConstants.FORM_ADD_LANGUAGE_DATA_SUCCESS, payload: languageData})
}

export const updateLanguageData = (languageData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_LANGUAGE_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_LANGUAGE_DATA_SUCCESS,
    payload: languageData,
  });
};

export const addHobby = (hobbyData) => dispatch => {
  dispatch({type: resumeFormConstants.FORM_ADD_HOBBY_DATA_REQUEST})
  dispatch({type: resumeFormConstants.FORM_ADD_HOBBY_DATA_SUCCESS, payload: hobbyData})
}