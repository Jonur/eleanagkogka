import c from 'classnames';

import { Star } from 'src/components/Icons';

type Item = { title: string; description: string; starColor: string };
type StarListProps = {
  items: Item[];
};

const StarList: React.FC<StarListProps> = ({ items }) => (
  <section className="border-t border-b border-black border-opacity-15 pt-3 pb-12 text-dark-blue">
    <h3 className="text-lg italic mb-12">My design values</h3>

    <dl className="grid grid-cols-2 gap-x-5 gap-y-12">
      {items.map((item) => (
        <div key={item.title}>
          <dt className="text-2xl font-bebas flex items-center gap-2">
            <span>{item.title}</span>
            <Star className={c('-mt-1', item.starColor)} />
          </dt>
          <dd>{item.description}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default StarList;
