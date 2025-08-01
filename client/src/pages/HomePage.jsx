import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Paper,
  Chip,
  Stack,
  Fade,
  Grow,
  useTheme,
} from '@mui/material';
import {
  Star as StarIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

// Animação customizada
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.3,
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: theme.shadows[10],
  },
  '& .MuiCardMedia-root': {
    paddingTop: '56.25%', // 16:9
  },
}));

const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: `${float} 3s ease-in-out infinite`,
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const features = [
  {
    title: 'React & MUI',
    description: 'Construído com as tecnologias mais modernas do mercado',
    image: 'https://source.unsplash.com/random/400x300?react',
    tags: ['React', 'Material-UI', 'JavaScript'],
  },
  {
    title: 'Design Responsivo',
    description: 'Interface adaptável para todos os dispositivos',
    image: 'https://source.unsplash.com/random/400x300?design',
    tags: ['Responsive', 'Mobile-First', 'UX'],
  },
  {
    title: 'Performance',
    description: 'Otimizado para máxima velocidade e eficiência',
    image: 'https://source.unsplash.com/random/400x300?technology',
    tags: ['Fast', 'Optimized', 'Scalable'],
  },
];

function HomePage() {
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box textAlign="center">
              <Typography
                component="h1"
                variant="h2"
                gutterBottom
                sx={{ fontWeight: 700, mb: 3 }}
              >
                Bem-vindo ao MERN App
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Uma aplicação moderna construída com React e Material-UI
              </Typography>
              <AnimatedBox display="inline-block">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  Começar Agora
                </Button>
              </AnimatedBox>
            </Box>
          </Fade>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <GradientText variant="h3" component="h2" gutterBottom>
            Recursos Incríveis
          </GradientText>
          <Typography variant="h6" color="text.secondary">
            Descubra o que torna nossa aplicação especial
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grow
              in
              timeout={1000 + index * 200}
              key={feature.title}
            >
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard>
                  <CardMedia
                    image={feature.image}
                    title={feature.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {feature.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {feature.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" startIcon={<FavoriteIcon />}>
                      Curtir
                    </Button>
                    <Button size="small" color="primary" startIcon={<ShareIcon />}>
                      Compartilhar
                    </Button>
                  </CardActions>
                </FeatureCard>
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: '1000+', label: 'Usuários Ativos' },
              { number: '50+', label: 'Componentes' },
              { number: '99%', label: 'Uptime' },
              { number: '24/7', label: 'Suporte' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Fade in timeout={1500 + index * 200}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      bgcolor: 'transparent',
                      border: `2px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      color="primary"
                      sx={{ fontWeight: 700 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              p: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              color: 'white',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Pronto para começar?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Junte-se a milhares de desenvolvedores que já estão usando nossa plataforma
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                Criar Conta
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Saiba Mais
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;