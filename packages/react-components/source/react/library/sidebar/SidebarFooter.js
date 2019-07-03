import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Heading from '../heading';
import Text from '../text';

const propTypes = {
  /** The root HTML element  */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Displays the name of the user in the sidebar's footer */
  username: PropTypes.string,
  /** Displays the version of the software in the sidebar's footer */
  version: PropTypes.string,
  /** Has the parent sidebar been minimized? If so render the minimized version of the footer. Don't worry about setting this manually. The parent components will add this prop for you. */
  minimized: PropTypes.bool,
};

const defaultProps = {
  as: 'button',
  username: '',
  version: '',
  minimized: false,
};

const SidebarFooter = ({ as, username, version, minimized, ...rest }) => {
  const Component = as;
  let meta;

  if (!minimized) {
    meta = (
      <div className="rc-sidebar-footer-meta-details">
        <Heading as="h6" className="rc-sidebar-footer-meta-username">
          {username}
        </Heading>
        <Text size="tiny" className="rc-sidebar-footer-meta-version">
          Version: {version}
        </Text>
      </div>
    );
  }

  return (
    <Component className="rc-sidebar-footer" {...rest}>
      <div className="rc-sidebar-footer-meta-user">
        <Icon type="profile" className="rc-sidebar-footer-meta-user-icon" />
      </div>
      {meta}
    </Component>
  );
};

SidebarFooter.propTypes = propTypes;
SidebarFooter.defaultProps = defaultProps;

export default SidebarFooter;