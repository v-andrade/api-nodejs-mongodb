import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Chip,
  LinearProgress,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Button,
  useTheme,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  AttachMoney as AttachMoneyIcon,
  Assessment as AssessmentIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StatsCard = styled(Card)(({ theme, color }) => ({
  height: '100%',
  position: 'relative',
  overflow: 'visible',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: color || theme.palette.primary.main,
  },
}));

const IconWrapper = styled(Box)(({ theme, bgcolor }) => ({
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: bgcolor || theme.palette.primary.main,
  color: 'white',
  marginBottom: theme.spacing(2),
}));

function DashboardPage() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  // Dados de exemplo
  const stats = [
    {
      title: 'Total de Usuários',
      value: '1,234',
      change: '+12%',
      icon: <PeopleIcon />,
      color: theme.palette.primary.main,
      trend: 'up',
    },
    {
      title: 'Vendas',
      value: 'R$ 45,678',
      change: '+23%',
      icon: <ShoppingCartIcon />,
      color: theme.palette.success.main,
      trend: 'up',
    },
    {
      title: 'Receita',
      value: 'R$ 89,012',
      change: '-5%',
      icon: <AttachMoneyIcon />,
      color: theme.palette.warning.main,
      trend: 'down',
    },
    {
      title: 'Taxa de Conversão',
      value: '3.45%',
      change: '+8%',
      icon: <AssessmentIcon />,
      color: theme.palette.info.main,
      trend: 'up',
    },
  ];

  const tableData = [
    { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'Admin', status: 'Ativo', lastLogin: '2024-01-10' },
    { id: 2, name: 'Maria Santos', email: 'maria@example.com', role: 'Usuário', status: 'Ativo', lastLogin: '2024-01-09' },
    { id: 3, name: 'Pedro Oliveira', email: 'pedro@example.com', role: 'Usuário', status: 'Inativo', lastLogin: '2024-01-05' },
    { id: 4, name: 'Ana Costa', email: 'ana@example.com', role: 'Editor', status: 'Ativo', lastLogin: '2024-01-10' },
    { id: 5, name: 'Carlos Souza', email: 'carlos@example.com', role: 'Usuário', status: 'Ativo', lastLogin: '2024-01-08' },
    { id: 6, name: 'Lucia Ferreira', email: 'lucia@example.com', role: 'Admin', status: 'Ativo', lastLogin: '2024-01-10' },
    { id: 7, name: 'Roberto Lima', email: 'roberto@example.com', role: 'Editor', status: 'Inativo', lastLogin: '2024-01-01' },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = tableData.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bem-vindo ao painel de controle
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard color={stat.color}>
              <CardContent>
                <IconWrapper bgcolor={stat.color}>
                  {stat.icon}
                </IconWrapper>
                <Typography variant="h4" component="div" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  {stat.trend === 'up' ? (
                    <TrendingUpIcon color="success" fontSize="small" />
                  ) : (
                    <TrendingDownIcon color="error" fontSize="small" />
                  )}
                  <Typography
                    variant="body2"
                    color={stat.trend === 'up' ? 'success.main' : 'error.main'}
                    ml={0.5}
                  >
                    {stat.change}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" ml={1}>
                    vs último mês
                  </Typography>
                </Box>
              </CardContent>
            </StatsCard>
          </Grid>
        ))}
      </Grid>

      {/* Progress Section */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Progresso do Projeto
            </Typography>
            <Box mt={3}>
              {[
                { name: 'Frontend', progress: 75, color: 'primary' },
                { name: 'Backend', progress: 60, color: 'secondary' },
                { name: 'Database', progress: 90, color: 'success' },
                { name: 'Deploy', progress: 45, color: 'warning' },
              ].map((item) => (
                <Box key={item.name} mb={3}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="body2">{item.progress}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                    color={item.color}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Atividades Recentes
            </Typography>
            <Box mt={3}>
              {[
                { action: 'Novo usuário cadastrado', time: '5 minutos atrás', type: 'success' },
                { action: 'Atualização do sistema', time: '1 hora atrás', type: 'info' },
                { action: 'Backup realizado', time: '3 horas atrás', type: 'success' },
                { action: 'Erro no servidor corrigido', time: '5 horas atrás', type: 'error' },
                { action: 'Nova funcionalidade adicionada', time: '1 dia atrás', type: 'primary' },
              ].map((activity, index) => (
                <Box key={index} mb={2} display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography variant="body2">{activity.action}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {activity.time}
                    </Typography>
                  </Box>
                  <Chip
                    label={activity.type}
                    size="small"
                    color={activity.type}
                    variant="outlined"
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Users Table */}
      <Paper sx={{ width: '100%', mb: 4 }}>
        <Box p={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h6">
              Usuários
            </Typography>
            <Box display="flex" gap={2}>
              <TextField
                size="small"
                placeholder="Buscar usuários..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                size="small"
              >
                Novo Usuário
              </Button>
            </Box>
          </Box>

          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 2 }}>
            <Tab label="Todos" />
            <Tab label="Ativos" />
            <Tab label="Inativos" />
          </Tabs>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Função</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Último Login</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.role}
                          size="small"
                          color={row.role === 'Admin' ? 'primary' : row.role === 'Editor' ? 'secondary' : 'default'}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          color={row.status === 'Ativo' ? 'success' : 'error'}
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>{row.lastLogin}</TableCell>
                      <TableCell align="right">
                        <IconButton size="small" color="primary">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Linhas por página:"
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default DashboardPage;