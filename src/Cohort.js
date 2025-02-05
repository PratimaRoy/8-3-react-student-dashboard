

import React from 'react';

class Cohort extends React.Component {
  /**
   * formatCohort- add a space between season name and year
   * @param {string} semester : ex.winter2025
   * @returns string with a space between the season and year(ex. winter 2025)
   */

  formatCohort = (semester) => {
    if (semester === 'All Students') return 'All Students';
    return `${semester.substring(0, semester.length - 4)} ${semester.substring(
      semester.length - 4
    )}`;
  };

  render() {
    const { semester, updateCohort } = this.props;
    return (
      <h3 className="cohort" onClick={() => updateCohort(semester)}>
        {this.formatCohort(semester)}
      </h3>
    );
  }
}

export default Cohort;