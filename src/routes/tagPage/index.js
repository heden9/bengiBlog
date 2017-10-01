import React from 'react';
import { connect } from 'dva';
import Banner from '../../components/tagBanner';
import './style.less';

function mapStateToProps() {
  return {

  };
}
function TagPage() {
  return (
    <div>
      <Banner />
    </div>
  );
}

export default connect(mapStateToProps)(TagPage);
