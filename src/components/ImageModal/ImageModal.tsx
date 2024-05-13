import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { Close } from 'src/components/Icons';

type ImageModalProps = {
  image: string;
  setImage: (img: string) => void;
};

Modal.setAppElement('#root');
const ImageModal: React.FC<ImageModalProps> = ({ image, setImage }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  useEffect(() => {
    if (image) {
      setIsOpen(true);
    }
  }, [image]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterClose={() => setImage('')}
      onRequestClose={handleCloseModal}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(251,251,251, 0.7)',
        },
        content: {
          height: 'fit-content',
          width: 'fit-content',
          padding: 0,
          inset: 0,
          border: 0,
          zIndex: 50,
          position: 'relative',
          borderRadius: '8px',
          marginTop: '-30px',
          maxWidth: 'calc(100% - 2rem)',
        },
      }}
      contentLabel="Image modal"
    >
      <button
        aria-label="Close modal"
        onClick={handleCloseModal}
        className="absolute right-4 top-4 text-3xl lg:text-4xl text-dark-blue"
      >
        <Close className="text-dark-blue" />
      </button>
      <img src={image} className="w-auto h-auto max-h-[90vh]" />
    </Modal>
  );
};

export default ImageModal;
