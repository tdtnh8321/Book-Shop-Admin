import Auth from "../features/Auth";
import Home from "../features/Home";
import Book from "../features/Book";
import Author from "../features/Author";
import Type from "../features/Type";
import Voucher from "../features/Voucher";
import Order from "../features/Order";
import Import from "../features/Import";
import Account from "../features/Account";

const publicRoutes = [{ path: "/", component: Auth }];
const privateRoutes = [
  { path: "/home/*", component: Home },
  { path: "/book/*", component: Book },
  { path: "/author/*", component: Author },
  { path: "/type/*", component: Type },
  { path: "/voucher/*", component: Voucher },
  { path: "/order/*", component: Order },
  { path: "/import/*", component: Import },
  { path: "/account/*", component: Account },
];
export { publicRoutes, privateRoutes };
