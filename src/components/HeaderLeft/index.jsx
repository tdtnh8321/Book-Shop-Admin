import logo from "../../assets/images/logo.png";
import DropdownMenu from "../../custom-fields/DropdownMenu";
function HeaderLeft(props) {
  return (
    <div className="w-full">
      <div className="m-5 my-3 flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="rounded-full object-cover mx-4 w-20 h-20"
        />
        <p className="text-white text-2xl font-mono uppercase">Chìll</p>
      </div>
      <hr className="mx-5 1rem 1rem" />
      <div className="menu-container w-full">
        <DropdownMenu
          icon="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          title="Manage"
          listItems={[
            { title: "Manage Book", link: "/book" },
            { title: "Manage Author", link: "/author" },
            { title: "Manage Type", link: "/type" },
            { title: "Manage Voucher", link: "/voucher" },
          ]}
        />
      </div>
      <hr className="mx-5 1rem 1rem" />
      <div className="menu-container w-full">
        <DropdownMenu
          icon="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          title="Manage Order"
          listItems={[{ title: "List Order", link: "/order" }]}
        />
      </div>
      <hr className="mx-5 1rem 1rem" />
      <div className="menu-container w-full">
        <DropdownMenu
          icon="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          title="Manage Import"
          listItems={[
            { title: "History Import", link: "/import" },
            { title: "Add Import", link: "/import/add" },
          ]}
        />
      </div>
      <div className="menu-container w-full">
        <DropdownMenu
          icon="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          title="Manage Account"
          listItems={[
            { title: "Customer", link: "/account/customer" },
            { title: "Employee", link: "/account/employee" },
          ]}
        />
      </div>
    </div>
  );
}

export default HeaderLeft;
