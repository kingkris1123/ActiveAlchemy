import React from 'react';
import { Typography, Box, Stack, Paper } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '50px', xs: '20px' }, p: '20px' }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, fontWeight: 700, color: '#000', mb: '33px' }}>
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '20px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <Paper key={index} elevation={3} sx={{ borderRadius: '20px', overflow: 'hidden' }}>
            <a
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img style={{ borderTopLeftRadius: '20px', width: '100%', height: 'auto' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box p="15px">
                <Typography sx={{ fontSize: { lg: '18px', xs: '14px' }, fontWeight: 600, color: '#000', mb: '10px' }}>
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
