import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete{' '}
      </button>
    </>
  );
};


ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};