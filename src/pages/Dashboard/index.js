import { Box, Container, Grid, Typography } from '@mui/material';
import { WeeklyOverview } from './components/WeeklyOverview';
import { WorkoutSummary } from './components/WorkoutSummary';
import { NutritionOverview } from './components/NutritionOverview';
import { GoalProgress } from './components/GoalProgress';

const Dashboard = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 6,
      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #0277bd 100%)',
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, color: '#fff' }}>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <WeeklyOverview />
          </Grid>
          <Grid item xs={12} md={4}>
            <WorkoutSummary />
          </Grid>
          <Grid item xs={12} md={6}>
            <NutritionOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalProgress />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;