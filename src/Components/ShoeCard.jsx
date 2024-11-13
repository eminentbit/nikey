import PropTypes from "prop-types";

export default function ShoeCard({ imgUrl, changeBigShoeImg, bigShoeImage }) {
  function handleClick() {
    if (bigShoeImage != imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl, bigShoeImage);
    }
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"> 
        <img src={imgUrl.thumbnail} alt="Shoe Image" width={127} height={103} />
      </div>
    </div>
  );
}

ShoeCard.propTypes = {
  imgUrl: PropTypes.object,
  changeBigShoeImg: PropTypes.func,
  bigShoeImage: PropTypes.string,
};
