import { Link } from 'react-router-dom';

import { Arrow } from 'src/components/Icons';
import { Route } from 'src/types';

type GoToProps = {
  to: Route;
  label: string;
};

const GoTo: React.FC<GoToProps> = ({ to, label }) => (
  <Link to={to} className="flex gap-2 items-center text-teal-dark">
    <span>{label}</span>
    <Arrow />
  </Link>
);

export default GoTo;
