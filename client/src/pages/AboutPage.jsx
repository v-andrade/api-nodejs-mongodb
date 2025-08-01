import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const IconAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

function AboutPage() {
  const theme = useTheme();

  const features = [
    {
      icon: <CodeIcon />,
      title: 'Código Limpo',
      description: 'Seguimos as melhores práticas de desenvolvimento para garantir código limpo e manutenível.',
    },
    {
      icon: <PaletteIcon />,
      title: 'Design Moderno',
      description: 'Interface construída com Material-UI para uma experiência visual consistente e agradável.',
    },
    {
      icon: <SpeedIcon />,
      title: 'Alta Performance',
      description: 'Otimizado para carregar rapidamente e proporcionar uma experiência fluida ao usuário.',
    },
    {
      icon: <SecurityIcon />,
      title: 'Segurança',
      description: 'Implementamos as melhores práticas de segurança para proteger seus dados.',
    },
  ];

  const faqs = [
    {
      question: 'O que é Material-UI?',
      answer: 'Material-UI (MUI) é uma biblioteca de componentes React que implementa o Material Design do Google. Oferece componentes prontos, temas customizáveis e ferramentas para criar interfaces modernas.',
    },
    {
      question: 'Como personalizar o tema?',
      answer: 'Você pode personalizar o tema editando o arquivo theme.js. Lá você pode alterar cores, tipografia, espaçamentos e sobrescrever estilos de componentes específicos.',
    },
    {
      question: 'Posso usar styled-components com MUI?',
      answer: 'Sim! O MUI oferece suporte completo para styled-components. Você pode usar tanto o styled do MUI quanto o styled-components tradicional.',
    },
    {
      question: 'Como adicionar animações?',
      answer: 'Você pode usar as animações do MUI (Fade, Grow, Slide, etc.) ou criar suas próprias usando CSS keyframes ou bibliotecas como Framer Motion.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sobre o Projeto
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Conheça mais sobre nossa aplicação e tecnologias utilizadas
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} mb={8}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.title}>
            <StyledPaper elevation={2}>
              <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <IconAvatar>{feature.icon}</IconAvatar>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Tech Stack */}
      <Box mb={8}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" mb={4}>
          Stack Tecnológica
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Frontend
              </Typography>
              <List>
                {['React 18', 'Material-UI v5', 'React Router v6', 'Styled Components', 'Vite'].map((tech) => (
                  <ListItem key={tech}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={tech} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Backend
              </Typography>
              <List>
                {['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Authentication'].map((tech) => (
                  <ListItem key={tech}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={tech} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* FAQ Section */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" mb={4}>
          Perguntas Frequentes
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default AboutPage;