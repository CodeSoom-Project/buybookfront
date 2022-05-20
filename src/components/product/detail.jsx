const ProductDetail = ({
   item: {
     category,
     title,
     image,
     description,
     price,
     rating: {rate},
   },
 }) => (
    <>
      <p>{category}</p>
      <p>{title}</p>
      <img src={image} />
      <p>{description}</p>
      <span>{price}</span>
      <span>{rate}</span>
    </>
)

export default ProductDetail;
