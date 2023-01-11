import React, { useState } from "react";

import ImageModal from "./ImageModal";

function Thumbnail(props) {
    const [showImage, setShowImage] = useState(false);

    const showImageHandler = () => {
        showImage ? setShowImage(false) : setShowImage(true);
    };

    return (
        <div>
            {props.tUrl}
            <button className="btn btn-outline-dark" onClick={showImageHandler}>
                Open Image
            </button>
            {showImage && (
                <ImageModal
                    title={props.title}
                    url={props.url}
                    onClose={showImageHandler}
                />
            )}
        </div>
    );
}

export default Thumbnail;