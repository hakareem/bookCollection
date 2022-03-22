import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{ fontFamily: "fantasy" }} variant='h2'>
          CRUD Application
        </Typography>
        <Typography variant='h5'>
          Built using MERN STACK - MongoDB | Express.js | React.js | Node.js
          <br></br>
          <h5>
            Learned Experience:
            <br></br>
            React Hooks
          </h5>
        </Typography>
      </Box>
    </div>
  );
};

export default About;
