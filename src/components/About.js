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
        </Typography>
        <Typography>
          <p>
            I created this full stack responsive web app where I'm able to add
            books to my collection and store them in the database. This was a
            fantastic learning experience as I was able to delve deeper into the
            world of programming, I leart about both front-end and back-end
            libraries.
          </p>
        </Typography>
      </Box>
    </div>
  );
};

export default About;
