import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/NavbarPage.css";
import user from "../images/user.jpg";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PersonIcon from "@mui/icons-material/Person";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { NavDropdown } from "react-bootstrap";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const NavbarPage = () => {
  return (
    <Navbar expand="md" className="navbar-container bg-body-tertiary">
      <Container className="d-flex flex-md-column">
        <div className="d-flex my-3">
          <Navbar.Brand href="#home" className="navbar-brand">
            <img src={user} alt="user" />
          </Navbar.Brand>
          <div>
            <NavDropdown
              title="Jane"
              id="basic-nav-dropdown"
              className="navbar-dropdown mt-2"
            >
              <span className="span-one text-danger border-1">Premium</span>{" "}
              <span className="span-two text-muted">Through 11/2</span>
              <NavDropdown.Item
                href="#action/3.1"
                className="d-flex justify-content-between"
              >
                Products <ToggleOffIcon fontSize="small" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.1"
                className="d-flex justify-content-between"
              >
                Explixit Filter <ToggleOffIcon fontSize="small" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.1"
                className="d-flex justify-content-between"
              >
                Friend Activity <ToggleOffIcon fontSize="small" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.1"
                className="d-flex justify-content-between"
              >
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item className="text-end" href="#action/3.1">
                Log out <ArrowCircleRightIcon fontSize="small" />{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <span className="span-three">PREMIUM</span>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="d-flex flex-column">
            <div className="d-flex flex-column">
              <Nav.Link href="#home" className="navbar-link-browse">
                BROWSE
              </Nav.Link>
              <Nav.Link href="#home" className="navbar-link">
                <HomeIcon /> Home
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                <LibraryMusicIcon /> Songs
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                <QueueMusicIcon /> Playlists
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                <PersonIcon /> Just for You
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                <ShowChartIcon /> Top Charts
              </Nav.Link>
            </div>
            <div className="d-flex flex-column mt-4">
              <div className="d-flex justify-content-between">
              <Nav.Link href="#home" className="navbar-link-browse">
                YOUR PLAYLISTS 
              </Nav.Link>
              <AddCircleIcon className="mt-2"/>
              </div>
              <Nav.Link href="#home" className="navbar-link">
                <PlaylistPlayIcon /> Workout Mix
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                <PlaylistPlayIcon /> Chliing at Home
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                <PlaylistPlayIcon /> Booping at Adope
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                <PlaylistPlayIcon /> XD 4 Life
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
