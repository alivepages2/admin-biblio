export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavDropdown",
        name: "Administrador",
        route: "/",
        icon: "cil-puzzle",
        items: [
          {
            name: "Usuarios",
            to: "/base/tables",
          },
          {
            name: "Libros",
            to: "/base/tables",
          },
          {
            name: "Tables",
            to: "/base/tables",
          },
        ],
      },
    ],

    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavDropdown",
        name: "Administrador",
        route: "/",
        icon: "cil-puzzle",
        items: [
          {
            name: "Usuarios",
            to: "/base/tables",
          },
          {
            name: "Libros",
            to: "/base/tables",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Bibliotecario",
        route: "/",
        icon: "cil-puzzle",
        items: [
          {
            name: "Consulta de préstamos",
            to: "/base/tables",
          },
          {
            name: "Aprobación de préstamos",
            to: "/base/tables",
          },
          {
            name: "Consulta de libros prestados",
            to: "/base/tables",
          },
          {
            name: "Confirmación de devolución",
            to: "/base/tables",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Lector",
        route: "/",
        icon: "cil-puzzle",
        items: [
          {
            name: "Consulta de libros",
            to: "/base/tables",
          },
          {
            name: "Solicitud de préstamos",
            to: "/base/tables",
          },
          {
            name: "Pefil de usuarios",
            to: "/base/tables",
          },
          {
            name: "Histprial de préstamos",
            to: "/base/tables",
          },
        ],
      },
    ],
  },
];
