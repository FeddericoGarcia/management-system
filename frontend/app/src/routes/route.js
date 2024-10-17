import React from 'react';

import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import SearchContent from '../components/SearchContent';
import SettingsUser from '../components/SettingsUser'
import Statistics from '../components/Statistics'
import UploadData from '../components/UploadData'

export const routes = {
  upload: {
    component: <UploadData />,
    icon: <UploadFileRoundedIcon />,
    label: 'Cargar'
  },
  search: {
    component: <SearchContent />,
    icon: <SearchRoundedIcon />,
    label: 'Buscar'
  },
  statistics: {
    component: <Statistics />,
    icon: <AnalyticsRoundedIcon />,
    label: 'Estadísticas'
  },
  settings: {
    component: <SettingsUser />,
    icon: <SettingsRoundedIcon />,
    label: 'Configuración'
  },
  logout: {
    component: <SettingsUser />,
    icon: <LogoutRoundedIcon />,
    label: 'Cerrar sesión'
  },
};

export const getRouteComponent = (route) => {
  return routes[route]?.component || routes.upload.component;
};