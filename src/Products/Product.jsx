const Product = ({ pro }) => {
  const {} = pro;
  return (
    <div className="shadow-lg p-6 rounded-lg h-full grid items-end">
      <img src={pro.img} alt="" />
    </div>
  );
};

export default Product;
