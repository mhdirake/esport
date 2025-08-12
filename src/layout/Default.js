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
  useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from 'pages/Products/Components/Loader';

function Default() {
  const [searchParams, setSearchParams] = useSearchParams(); // ✅ Correct destructure
  const currentPage = searchParams.get('page'); // ✅ Get ?page=value

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
    if (!currentPage) {
      setSearchParams({ page: 'shop' });
    }
  }, []);

  const menuItems = [
    { label: 'درباره ما', page: 'about' },
    { label: 'پخش زنده', page: 'stream' },
    { label: 'تیم ما', page: 'team' },
    { label: 'فروشگاه', page: 'shop' },
  ];

  return (
    <TransitionGroup>
      <CSSTransition timeout={450} classNames="fade">
        <Box className="page" sx={{ position: 'relative' }}>
          <MenuContainer>
            <MenuList key={currentPage}>
              {menuItems.map((item) => (
                <ListItem key={item.page} disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={`/?page=${item.page}`}
                    selected={currentPage === item.page}
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
  );
}

const MenuContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  left: '50%',
  zIndex: 1300,
  transform: 'translateX(-50%)',
  backgroundColor: 'transparent',
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.main,

  '.MuiButtonBase-root': {
    padding: 0,
    minWidth: '70px',

    '.MuiTypography-root': {
      fontSize: '14px',
      textAlign: 'center',
      
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
  },
}));

const MenuList = styled(List)(({ theme }) => ({
  display: 'flex',
  gap: 16,
  padding: 0,

  [theme.breakpoints.down('sm')]: {
    gap: 0,
  },

  '.Mui-selected': {
    position: 'relative',
    color: '#fff',
    borderRadius: theme.shape.borderRadius,
    zIndex: 1,
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    transition: 'transform 0.2s ease',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      borderRadius: theme.shape.borderRadius,
      background: 'linear-gradient(90deg, #ff7f50, #ff4500, #ffa500, #ff7f50)',
      backgroundSize: '300% 300%',
      animation: 'minimalFire 3s ease-in-out infinite',
      zIndex: -1,
      filter: 'blur(4px)',
      opacity: 0.3,
    },
  },

  '@keyframes minimalFire': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

export default Default;
