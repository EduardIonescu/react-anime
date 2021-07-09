import React, { useState } from 'react';
import './Components_styles/style.scss';
import ModalVideo from 'react-modal-video';

export const AnimeTrailer = (trailer_url) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <React.Fragment>
            <ModalVideo
                channel='custom'
                autoplay isOpen={isOpen}
                url={`${trailer_url}`}
                onClose={() => setOpen(false)}
            />

            <button
                onClick={() => setOpen(true)}>
                TRAILER
            </button>
        </React.Fragment>
    );
}

export default AnimeTrailer;