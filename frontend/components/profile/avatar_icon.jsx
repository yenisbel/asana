import React from 'react';

const AvatarIcon = props => {

    const avatarIcons = {
        flushed: <i className="fas fa-flushed"></i>,
        grin: <i className="fas fa-grin"></i>,
        frown: <i className="fas fa-frown"></i>,
        smile: <i className="fas fa-smile"></i>,
    };

    const { photo_url } = props;

    const avatar = avatarIcons.hasOwnProperty(photo_url) ? avatarIcons[photo_url] : <i className="fas fa-user"></i>;

    return (
        <div>
            {avatar}
        </div>
    );
};

export default AvatarIcon;