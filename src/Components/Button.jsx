import PropTypes from "prop-types";

export default function Button({ label, iconURL, isFullWidth }) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red bg-opacity-95 hover:bg-opacity-100 ${isFullWidth} && w-full`}>
      {label}

      {iconURL && <img src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  iconURL: PropTypes.string,
  // isFullWidth: PropTypes.bool,
};
