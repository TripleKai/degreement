import Modal from './Modal';

const Contact = ({ onDone }) => {
  return (
    <Modal title='Contact Info' onClose={onDone}>
      <p>
        <b>Email:</b> kailash.saravanan1997@gmail.com
      </p>
      <p>
        <b>Phone: </b> (734) 658-0417
      </p>
    </Modal>
  );
};

export default Contact;
