import { ReactNode } from "react";

interface IBreadcrumb {
  titles: string[];
  links: string[];
}

interface IBreadcrumbItemProps {
  children: ReactNode;
  isFirst: boolean;
  href?: string;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
);

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = ({
  children,
  isFirst,
  href,
  onClick,
}) => {
  return (
    <span
      style={{
        fontFamily: "sans-serif",
        opacity: isFirst ? 0.5 : 1,
        color: isFirst ? "#71717A" : "#09090B",
      }}
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </span>
  );
};

export const Breadcrumb: React.FC<IBreadcrumb> = ({ titles, links }) => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();
    window.history.pushState(null, "", href);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {titles.map((val, i) => (
        <p key={i} style={{ display: "flex", alignItems: "center" }}>
          <BreadcrumbItem
            isFirst={i !== titles.length - 1}
            href={i < links.length ? links[i] : undefined}
            onClick={(e) =>
              i < links.length && handleLinkClick(e, links[i])
            }
          >
            {val}
          </BreadcrumbItem>
          {i !== titles.length - 1 && <ArrowIcon />}
        </p>
      ))}
    </div>
  );
};
