import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
// import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
// import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
// import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { useRoute } from '../routes/RouteContext';
import { routes } from '../routes/route';

// const mainListItems = [
//   { text: 'Cargar', icon: <UploadFileRoundedIcon /> },
//   { text: 'Buscar', icon: <SearchRoundedIcon /> },
//   { text: 'Estadísticas', icon: <AnalyticsRoundedIcon /> },
// ];

// const secondaryListItems = [
//   { text: 'Configuración', icon: <SettingsRoundedIcon /> },
//   { text: 'Cerrar Sesión', icon: <LogoutRoundedIcon /> },
// ];

export default function MenuContent() {
  const { selectedRoute, setSelectedRoute } = useRoute();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
      {Object.entries(routes).map(([key, { icon, label }]) => (
        <ListItem 
          button 
          key={key} 
          onClick={() => setSelectedRoute(key)}
          selected={selectedRoute === key}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      ))}
        {/* {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>

      {/* <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}