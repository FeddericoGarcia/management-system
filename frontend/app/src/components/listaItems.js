import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import StackedLineChartRoundedIcon from '@mui/icons-material/StackedLineChartRounded';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <StackedLineChartRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Cargar venta" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Info ventas" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar datos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Usuario" />
    </ListItemButton>
  </React.Fragment> 
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
        <ListItemIcon>
            <LogoutRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar sesión" />
    </ListItemButton>
    </React.Fragment> 
);