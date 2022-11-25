import Heading from "../../components/ui/heading";
import { Card } from "../../components/category-card";
import useToTop from "../../hooks/usToTop";
import { useParams } from "react-router-dom";
import useCategorizedBooks from "../../hooks/use-categorized-books";

const Category = () => {
  useToTop();
  const { id } = useParams();
  const books = useCategorizedBooks(id);
  console.log(books);
  return (
    <section className='w-4/5 mx-auto'>
      <Heading>Comics</Heading>
      <div className='space-y-10 mx-auto'>
        {books?.map((_) => (
          <Card key={_} {..._} />
        ))}
      </div>
    </section>
  );
};

export default Category;
