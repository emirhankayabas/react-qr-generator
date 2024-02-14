import PropTypes from "prop-types";
import QRCode from "react-qr-code";

export default function QRGenerator({ data, ...props }) {
  return (
    <div>
      <QRCode value={data} {...props} />
    </div>
  );
}

QRGenerator.propTypes = {
  data: PropTypes.string.isRequired,
};
