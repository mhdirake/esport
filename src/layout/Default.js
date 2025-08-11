import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Outlet as RouterOutlet,
  Link as RouterLink,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from 'pages/Products/Components/Loader';

// منوی استایل شده با position absolute

function Default() {
  const [loading, setLoading] = useState(true);
  function checkImagesAreLoaded() {
    setLoading(true);

    setTimeout(() => {
      const loadedImages = [];
      const images = document.getElementsByTagName('img');

      if (images) {
        for (let i = 0; i < images.length; i++) {
          const element = images[i];
          if (element.complete) {
            loadedImages.push(element);
          }
        }
        if (loadedImages.length === images.length) {
          setLoading(false);
        } else {
          setTimeout(() => {
            checkImagesAreLoaded();
          }, 400);
        }
      }
    }, 4000);
  }

  useEffect(() => {
    checkImagesAreLoaded();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menuItems = [
    { label: 'درباره ما', to: '/#about' },
    { label: 'پخش زنده', to: '/#stream' },
    { label: 'تیم ما', to: '/#team' },
    { label: 'فروشگاه', to: '/#shop' },
  ];

  return (
    <>
      <TransitionGroup>
        <CSSTransition timeout={450} classNames="fade">
          <Box className="page" sx={{ position: 'relative' }}>
            <MenuContainer>
              <MenuList>
                {menuItems.map((item) => (
                  <ListItem key={item.to} disablePadding>
                    <ListItemButton
                      component={RouterLink}
                      to={item.to}
                      sx={{ borderRadius: 1 }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </MenuList>
            </MenuContainer>

            <Loader loading={loading} />

            <RouterOutlet />
          </Box>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

const MenuContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 20, 
  left: "50%", 
  zIndex: 1300, 
  transform: "translateX(-50%)",
  backgroundColor: "transparent",
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.main,

  ".MuiButtonBase-root": {
    padding: 0,
    minWidth: "70px",

    ".MuiTypography-root": {
      fontSize: "14px",
      textAlign: "center",
    }
  }
}));

const MenuList = styled(List)({
  display: 'flex',
  gap: 16,
  padding: 0,
});

export default Default;
