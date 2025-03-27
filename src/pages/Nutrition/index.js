import { useState } from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent,
  LinearProgress, Tabs, Tab
} from '@mui/material';
import { MealPlan } from './components/MealPlan';
import { MacroTracker } from './components/MacroTracker';
import { WaterIntake } from './components/WaterIntake';
import { NutritionGoals } from './components/NutritionGoals';

const Nutrition = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 6,
      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #0277bd 100%)',
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, color: '#fff' }}>
          Nutrition
        </Typography>

        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          sx={{
            mb: 4,
            '& .MuiTab-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              '&.Mui-selected': {
                color: '#fff',
              },
            },
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            },
          }}
        >
          <Tab label="Meal Plan" />
          <Tab label="Macros" />
          <Tab label="Goals" />
        </Tabs>

        {tab === 0 && <MealPlan />}
        {tab === 1 && <MacroTracker />}
        {tab === 2 && <NutritionGoals />}

        <WaterIntake />
      </Container>
    </Box>
  );
};

export default Nutrition;