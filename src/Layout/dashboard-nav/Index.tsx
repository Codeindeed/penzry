import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import Category from "../../Components/icons/Category";
import JobsIcon from "../../Components/icons/JobsIcon";
import AssessmentIcon from "../../Components/icons/AssessmentIcon";
import ProfileIcon from "../../Components/icons/ProfileIcon";
import BillingIcon from "../../Components/icons/BillingIcon";
import SupportIcon from "../../Components/icons/SupportIcon";
import NotesIcon from "../../Components/icons/NotesIcon";
import LogoutIcon from "../../Components/icons/LogoutIcon";

interface NavItemProps {
  children: ReactNode;
  to: string;
  text: string;
  onClick?: any;
  className?: string;
}

interface NavProps {
  navHandler: Function;
}

const Navigation = ({ navHandler }: NavProps) => {
  const handleClick = () => {
    navHandler(false);
  };

  return (
    <div className="mt-5">
      <span className="hidden md:block text-body-sm font-medium text-grey-30 uppercase mx-4 mb-2">
        MAIN
      </span>
      <NavItem to="/" text="Dashboard" onClick={handleClick}>
        <Category />
      </NavItem>
      <NavItem
        to="/create-feedback"
        text="Create Feedback"
        onClick={handleClick}
      >
        <JobsIcon />
      </NavItem>
      <NavItem to="/all-feedbacks" text="All Feedbacks" onClick={handleClick}>
        <AssessmentIcon />
      </NavItem>
      <NavItem to="/dast" text="Create Offers" onClick={handleClick}>
        <NotesIcon />
      </NavItem>
      <NavItem to="/das" text="Offers" onClick={handleClick}>
        <BillingIcon />
      </NavItem>

      <span className="block text-body-sm font-medium text-grey-30 uppercase mx-4 mt-5 mb-2">
        <span className="hidden md:block">Personal</span>
      </span>
      <NavItem to="/dasa" text="My Profile" onClick={handleClick}>
        <ProfileIcon />
      </NavItem>
      <NavItem to="/das" text="Support" onClick={handleClick}>
        <SupportIcon />
      </NavItem>
      <button className="px-4 py-2.5 transition-all duration-500 text-body-sm text-[14.5px] md:text-body-md hover:bg-variant-10 rounded flex items-center gap-3 my-0.5 translate-x-0 hover:translate-x-[1px]  stroke-grey-50 bg-transparent text-grey-50 w-full">
        <LogoutIcon /> Sign Out
      </button>
    </div>
  );
};

export default Navigation;

export const NavItem = ({
  children,
  to,
  className,
  text,
  onClick,
  ...props
}: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return (
          "px-4 py-2 transition-all duration-500 text-body-sm text-[14.5px] md:text-body-md hover:bg-variant-10 rounded flex items-center gap-3 my-0.5 translate-x-0 hover:translate-x-[1px] " +
          (isActive ? " text-primary" : " ") +
          (isActive
            ? " stroke-primary bg-variant-10 text-primary "
            : " stroke-grey-50 bg-transparent text-grey-50 ") +
          className
        );
      }}
      onClick={onClick}
      {...props}
    >
      {children}
      {text}
    </NavLink>
  );
};