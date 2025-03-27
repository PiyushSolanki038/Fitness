import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, LinearProgress, Tab, Tabs } from '@mui/material';
import { Restaurant, LocalDining, Timeline, TrendingUp } from '@mui/icons-material';
import { useState } from 'react';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState(0);

  const nutritionStats = {
    calories: { consumed: 1200, goal: 2000 },
    protein: { consumed: 45, goal: 80 },
    carbs: { consumed: 140, goal: 250 },
    fats: { consumed: 35, goal: 65 }
  };

  const mealPlans = [
    {
      title: 'Breakfast',
      time: '7:00 AM',
      calories: 400,
      image: 'https://source.unsplash.com/800x600/?healthy-breakfast',
      items: ['Oatmeal with berries', 'Greek yogurt', 'Almonds', 'Green tea']
    },
    {
      title: 'Lunch',
      time: '12:30 PM',
      calories: 600,
      image: 'https://source.unsplash.com/800x600/?healthy-lunch',
      items: ['Grilled chicken salad', 'Quinoa', 'Avocado', 'Fresh vegetables']
    },
    {
      title: 'Dinner',
      time: '7:00 PM',
      calories: 500,
      image: 'https://source.unsplash.com/800x600/?healthy-dinner',
      items: ['Salmon fillet', 'Brown rice', 'Steamed broccoli', 'Olive oil']
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: 700,
            textAlign: 'center',
            color: 'primary.main'
          }}
        >
          Nutrition Tracker
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Today's Progress</Typography>
            <Grid container spacing={3}>
              {Object.entries(nutritionStats).map(([nutrient, { consumed, goal }]) => (
                <Grid item xs={12} sm={6} md={3} key={nutrient}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                        {nutrient}
                      </Typography>
                      <Typography variant="body2">
                        {consumed} / {goal}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(consumed / goal) * 100}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            centered
            sx={{ mb: 4 }}
          >
            <Tab label="Meal Plan" icon={<Restaurant />} iconPosition="start" />
            <Tab label="Nutrition Goals" icon={<TrendingUp />} iconPosition="start" />
          </Tabs>
        </Box>

        {activeTab === 0 && (
          <Grid container spacing={4}>
            {mealPlans.map((meal) => (
              <Grid item xs={12} md={4} key={meal.title}>
                <Card
                  sx={{
                    height: '100%',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={meal.image}
                    alt={meal.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6">{meal.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{meal.time}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {meal.calories} calories
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {meal.items.map((item, index) => (
                        <Typography component="li" key={index} variant="body2">
                          {item}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ mt: 2, borderRadius: 2, textTransform: 'none' }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Nutrition;