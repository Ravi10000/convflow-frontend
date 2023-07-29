import styles from './team-group.module.scss';
import StaffCard from './staff-card/staff-card';
import { team } from 'src/data/team-info';

function TeamGroup() {
  return (
    <div className={styles.teamGroup}>
      <h2 className={styles.title}>Our Team</h2>
      <div className={styles.container}>
        {team.map((staff) => (
          <StaffCard staff={staff} key={staff?.id} />
        ))}
      </div>
    </div>
  );
}

export default TeamGroup;
