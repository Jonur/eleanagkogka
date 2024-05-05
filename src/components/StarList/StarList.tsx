import c from 'classnames';

import { Star } from 'src/components/Icons';

type Item = { title: string; description: string; starColor: string };
type StarListProps = {
  items: Item[];
};

const StarList: React.FC<StarListProps> = ({ items }) => (
  <section className="border-t border-b border-black border-opacity-15 pt-3 pb-12 text-dark-blue max-w-[1180px] lg:w-full">
    <h3 className="text-lg italic mb-12 lg:mb-[80px]">My design values</h3>

    <dl className="grid grid-cols-2 gap-x-5 gap-y-12 lg:px-10 lg:gap-x-0 lg:gap-y-0 lg:flex lg:justify-between">
      {items.map((item) => (
        <div key={item.title} className="lg:w-[200px]">
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
