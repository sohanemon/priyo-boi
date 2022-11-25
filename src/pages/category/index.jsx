import Heading from "../../components/ui/heading";
import { Card } from "../../components/category-card";

const Category = () => {
  return (
    <section className='w-4/5 mx-auto'>
      <Heading>Comics</Heading>
      <div className='space-y-10 mx-auto'>
        {[...Array(20).keys()].map((_) => (
          <Card key={_} />
        ))}
      </div>
    </section>
  );
};

export default Category;
