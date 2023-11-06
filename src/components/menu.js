const current_user = JSON.parse(localStorage.currentUser);
console.log("202", current_user);
var type = current_user.type;
console.log("Line 4",type)
var data;
if (type == "admin") {
  data = [
    {
      id: 1,
      label: "home",
      icon: "bx-user",
      link: '/dashboard'
    }
    ,
    {
      id: 1,
      label: "countries",
      icon: "bx-user",
      link: '/countries'

    },
    {
      id: 1,
      label: "universities",
      icon: "bx-user",
      link: '/unvarsecites'

    },
    {
      id: 1,
      label: "states",
      icon: "bx-phone",
      link: '/states'

    },
    {
      id: 1,
      label: "cites",
      icon: "bx-phone",
      link: '/cities'

    },
    {
      id: 1,
      label: "awards",
      icon: "bx-cash",
      link: '/awards'

    },
    {
      id: 1,
      label: "admin records",
      icon: "bx-phone",
      link: '/admin-records'
    }
    ,
    {
      id: 1,
      label: "users",
      icon: "bx-user",
      link: '/users'

    },
  ]
}
if (type=="poster") {
  

  data = [{
    id: 1,
    label: "home",
    icon: "bx-user",
    link: '/dashboard'

  },
  {
    id: 1,
    label: "my awards",
    icon: "bx-user",
    link: '/my-awards'

  },
  {
    id: 1,
    label: "records",
    icon: "bx-phone",
    link: '/recordes'
  }

    ,]
}


export const menuItems = [
  ...data
];

