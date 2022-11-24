import Card from "../../components/ui/card";
import Heading from "../../components/ui/heading";

const Advertisement = () => {
  return (
    <>
      <Heading desc='Get the greatest deals with awesome books'>
        Best Deals
      </Heading>
      <div className='grid grid-cols-3 gap-5'>
        {[...Array(3).keys()].map((_) => (
          <Card key={_} />
        ))}
      </div>
    </>
  );
};

export default Advertisement;
