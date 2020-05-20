import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import UserData from "./userData.js";
import ResumeCard from "./ResumeCard";

import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  addResume: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    width: "75%",
    backgroundColor: "lightgrey",
  },
  infoContainer: {
    backgroundColor: "#3f51b5",
    width: "20%",
    alignSelf: "flex-start",
  },
}));

function Profile(props) {
  const classes = useStyles();
  return (
    <div className="profile">
      <div className={classes.container}>
        <div className="resume-container">
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </div>
        <NavLink to="/form/generalInfo">
          <Button
            variant="contained"
            color="primary"
            className={classes.addResume}
          >
            Add a New Resume
          </Button>
        </NavLink>
      </div>

      <div className={classes.infoContainer}>
        <UserData />
        <h1>Testing</h1>
      </div>
    </div>
  );
}

export default Profile;
