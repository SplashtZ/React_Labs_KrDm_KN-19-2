import React from "react";

import styles from "./ImageModal.module.css";

function ImageModal(props) {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onClose}>
                <div>
                    <img scr={props.url} alt="Image" height="600" />
                </div>
                <div className={styles.actions}>
                    {/* if image don't open
          //////////*/}
                    <button>
                        <a href={props.url}>go on link</a>
                    </button>
                    {/* ///////////// */}

                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ImageModal;