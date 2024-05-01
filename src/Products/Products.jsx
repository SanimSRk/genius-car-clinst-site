import { useQuery } from '@tanstack/react-query';
import Product from './Product';

const Products = () => {
  const { data, isPending } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const res = await fetch('services.json');
      return res.json();
    },
  });

  return (
    <div>
      <div className=" lg:w-2/3 md:w-2/3 lg:mx-auto md: mx-auto text-center">
        <p className="text-[#FF3811] font-semibold">Popular Products</p>
        <h2 className="text-4xl font-bold">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((pro, idex) => (
          <Product key={idex} pro={pro}></Product>
        ))}
      </div>

      <div className=" mt-12 grid justify-center">
        <button className="btn text-white bg-[#FF3811]">More product</button>
      </div>
    </div>
  );
};

export default Products;
