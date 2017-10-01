import React from 'react';
import '../../assets/svg/iconfont';
import './style.less';

export default function IconFont({ type }) {
  return (
    <svg className="icon-font" aria-hidden="true">
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
}
