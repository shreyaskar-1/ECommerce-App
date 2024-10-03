import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
  const [categoryMenuAnchor, setCategoryMenuAnchor] = useState(null);
  const [subcategoryMenuAnchor, setSubcategoryMenuAnchor] = useState(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  
  const handleCategoryMenuOpen = (event) => {
    setCategoryMenuAnchor(event.currentTarget);
  };
  
  const handleAccountMenuOpen = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };
  
  const handleCloseAllMenus = () => {
    setCategoryMenuAnchor(null);
    setAccountMenuAnchor(null);
    setSubcategoryMenuAnchor(null);
  };

  return (
    <>
      <AppBar position="sticky" className="bg-[#EDE8D0] shadow-none">
        <Toolbar className="bg-[#EDE8D0] flex justify-between">
          <Typography
            variant="h4"
            className="font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Shrey&apos;s Store
          </Typography>

          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="text-[#6F4E37] font-semibold hover:jiggle">
              Home
            </NavLink>
            <div>
              <NavLink
                to="#"
                className="text-[#6F4E37] font-semibold hover:jiggle"
                onClick={handleCategoryMenuOpen}
              >
                Categories
              </NavLink>

              <Menu
                anchorEl={categoryMenuAnchor}
                open={Boolean(categoryMenuAnchor)}
                onClose={handleCloseAllMenus}
                onMouseLeave={handleCloseAllMenus}
              >
                {['Men', 'Women', 'Kids'].map((category) => (
                  <MenuItem key={category} onMouseEnter={() => setSubcategoryMenuAnchor(category)}>
                    <span className="w-full text-[#6F4E37] cursor-pointer">{category}</span>
                    <Menu
                      anchorEl={subcategoryMenuAnchor === category ? categoryMenuAnchor : null}
                      open={subcategoryMenuAnchor === category}
                      onClose={handleCloseAllMenus}
                    >
                      {category === 'Men' && (
                        <>
                          <MenuItem>
                            <NavLink to="/categories/men/shirts" className="w-full text-[#6F4E37]">Shirts</NavLink>
                          </MenuItem>
                          <MenuItem>
                            <NavLink to="/categories/men/pants" className="w-full text-[#6F4E37]">Pants</NavLink>
                          </MenuItem>
                        </>
                      )}
                      {category === 'Women' && (
                        <>
                          <MenuItem>
                            <NavLink to="/categories/women/dresses" className="w-full text-[#6F4E37]">Dresses</NavLink>
                          </MenuItem>
                          <MenuItem>
                            <NavLink to="/categories/women/tops" className="w-full text-[#6F4E37]">Tops</NavLink>
                          </MenuItem>
                        </>
                      )}
                      {category === 'Kids' && (
                        <>
                          <MenuItem>
                            <NavLink to="/categories/kids/toys" className="w-full text-[#6F4E37]">Toys</NavLink>
                          </MenuItem>
                          <MenuItem>
                            <NavLink to="/categories/kids/clothes" className="w-full text-[#6F4E37]">Clothes</NavLink>
                          </MenuItem>
                        </>
                      )}
                    </Menu>
                  </MenuItem>
                ))}
              </Menu>
            </div>

            <NavLink to="/about" className="text-[#6F4E37] font-semibold hover:jiggle">About</NavLink>
            <NavLink to="/contact" className="text-[#6F4E37] font-semibold hover:jiggle">Contact</NavLink>
            <NavLink to="/policy" className="text-[#6F4E37] font-semibold hover:jiggle">Policy</NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            <IconButton edge="end" className="text-[#6F4E37] hover:jiggle">
              <FavoriteIcon />
            </IconButton>
            <IconButton edge="end" className="text-[#6F4E37] hover:jiggle">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton edge="end" className="text-[#6F4E37] hover:jiggle" onClick={handleAccountMenuOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={accountMenuAnchor}
              open={Boolean(accountMenuAnchor)}
              onClose={handleCloseAllMenus}
            >
              <MenuItem onClick={handleCloseAllMenus}>
                <NavLink to="/register" className="w-full text-[#6F4E37]">Register</NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseAllMenus}>
                <NavLink to="/login" className="w-full text-[#6F4E37]">Login</NavLink>
              </MenuItem>
            </Menu>
          </div>

          <div className="md:hidden">
            {!drawerOpen && (
              <IconButton edge="end" className="text-[#6F4E37]" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} className="md:hidden">
        <Box className="w-64 bg-[#EDE8D0] h-full">
          <div className="flex justify-end p-4">
            <IconButton onClick={toggleDrawer} className="text-[#6F4E37]">
              <CloseIcon />
            </IconButton>
          </div>

          <List className="flex flex-col space-y-4">
            <ListItem button onClick={toggleDrawer}>
              <NavLink to="/" className="w-full text-[#6F4E37] font-semibold hover:jiggle">Home</NavLink>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <NavLink to="/about" className="w-full text-[#6F4E37] font-semibold hover:jiggle">About</NavLink>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <NavLink to="/contact" className="w-full text-[#6F4E37] font-semibold hover:jiggle">Contact</NavLink>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <NavLink to="/policy" className="w-full text-[#6F4E37] font-semibold hover:jiggle">Policy</NavLink>
            </ListItem>
            <ListItem button onClick={handleCategoryMenuOpen}>
              <span className="w-full text-[#6F4E37] font-semibold hover:jiggle">Categories</span>
            </ListItem>
            <Menu
              anchorEl={categoryMenuAnchor}
              open={Boolean(categoryMenuAnchor)}
              onClose={handleCloseAllMenus}
            >
              <Typography variant="h6" className="w-full text-[#6F4E37] text-center font-semibold">
                Categories
              </Typography>
              {['Men', 'Women', 'Kids'].map((category) => (
                <MenuItem key={category}>
                  <NavLink
                    to={`/categories/${category.toLowerCase()}`}
                    className="w-full text-[#6F4E37]"
                    onClick={toggleDrawer}
                  >
                    {category}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
