import { Link } from "react-router-dom"
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import './Menu.css'

export default function Menu() {
  return (
    <>
    <div className="menu">
    <Navbar fluid>
      <NavbarBrand to="">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-bold text-white">Colegio App</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm font-bold">Nombre</span>
            <DropdownDivider />
            <span className="block truncate text-sm font-medium">Correo - email</span>
          </DropdownHeader>
          <DropdownItem>Tareas</DropdownItem>
          <DropdownItem>Notas</DropdownItem>
          <DropdownItem>Configuración</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Cerrar Sesión</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <div>
        <NavbarCollapse>
            <NavbarLink to="/home">
            <div className="itemMenu">
                Inicio
            </div>
            </NavbarLink>
            <NavbarLink to="/home">
            <div className="itemMenu">
                Tareas
            </div>
            </NavbarLink>
            <NavbarLink to="/home">
            <div className="itemMenu">
                Examenes
            </div>
            </NavbarLink>
            <NavbarLink to="/home">
            <div className="itemMenu">
                Calendario
            </div>
            </NavbarLink>
            <NavbarLink to="/home">
            <div className="itemMenu">
                Analisis de Datos
            </div>
            </NavbarLink>
        </NavbarCollapse>
      </div>

    </Navbar>
    </div>
    </>
  )
}