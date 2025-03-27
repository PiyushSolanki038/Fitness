import { useState } from 'react';
import { 
  Box, Container, Grid, Typography, Card, CardContent,
  Button, TextField, InputAdornment 
} from '@mui/material';
import { Search, Add } from '@mui/icons-material';
import WorkoutCard from './components/WorkoutCard';
import WorkoutModal from './components/WorkoutModal';

const Workouts = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 6,
      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #0277bd 100%)',
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4
        }}>
          <Typography variant="h3" sx={{ color: '#fff' }}>
            Workouts
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpen(true)}
            sx={{ 
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)',
            }}
          >
            New Workout
          </Button>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search workouts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ 
            mb: 4,
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
              </InputAdornment>
            ),
          }}
        />

        <Grid container spacing={3}>
          {/* Workout cards will be mapped here */}
        </Grid>

        <WorkoutModal open={open} onClose={() => setOpen(false)} />
      </Container>
    </Box>
  );
};

export default Workouts;