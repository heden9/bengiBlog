import React from 'react';
import classNames from 'classnames';
import './style.less';

export default function IconFont({ type: { id }, className = '' }) {
  return (
    <svg
      className={classNames({
      'icon-font': true,
      [className]: true,
    })}
      aria-hidden="true"
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}
