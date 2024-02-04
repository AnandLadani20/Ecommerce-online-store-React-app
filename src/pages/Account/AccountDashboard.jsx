import React from "react";
import { ReactComponent as OrderBoxIcon } from "../../files/svg/box.svg";
import { ReactComponent as DownloadIcon } from "../../files/svg/download.svg";
import { ReactComponent as HeartIcon } from "../../files/svg/heartIcon.svg";
import { ReactComponent as LocationIcon } from "../../files/svg/location.svg";
import { ReactComponent as LogoutIcon } from "../../files/svg/logout.svg";
import { ReactComponent as UserIcon } from "../../files/svg/user.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/auth";

const AccountDashboard = () => {
  const { logOut,user } = useAuthContext();

  const iconBoxes = [
    {
      icon: OrderBoxIcon,
      name: "ORDERS",
      link: "/my-account/Account-Order",
    },
    {
      icon: DownloadIcon,
      name: "DOWNLOADS",
      link: "/my-account/Account-Download",
    },
    {
      icon: LocationIcon,
      name: "ADDRESSES",
      link: "/my-account/Account-Address",
    },
    {
      icon: UserIcon,
      name: "ACCOUNT DETAILS",
      link: "/my-account/Account-Details",
    },
    {
      icon: HeartIcon,
      name: "WHISHLIST",
      link: "/wishlist",
    },

  ];

  return (
    <>
      <div className="accnt-dashboard-wrap">
        <h6 className="mb-4">
          <span>Hello</span> {user?.fname} {user?.lname}
        </h6>
        <p className="mb-4">
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>
        <div className="accnt-menu-wrapper">
          <div className="row">
            {iconBoxes.map((b, i) => {
              return (
                <div className="col-12 col-sm-6 col-md-4" key={i}>
                  <div className="accnt-menu-box">
                    <Link to={`${b.link}`}>
                      <b.icon />
                    </Link>
                    <p>{b.name}</p>
                  </div>
                </div>
              );
            })}
               <div className="col-12 col-sm-6 col-md-4">
                  <div className="accnt-menu-box">
                    <Link to="#" onClick={logOut}>
                     <LogoutIcon />
                    </Link>
                    <p>LOGOUT</p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDashboard;
