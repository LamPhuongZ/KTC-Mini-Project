import PropTypes from "prop-types";

ChildrenLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export function ChildrenLayout({ children }) {
  return <form id="formChildren">{children}</form>;
}
