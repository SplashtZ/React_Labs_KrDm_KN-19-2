import React, { useState, useEffect } from "react";

import Thumbnail from "./Thumbnail";

import { List, AutoSizer } from "react-virtualized";

import "bootstrap/dist/css/bootstrap.min.css";

function Data(props) {
    const [urlData, setUrlData] = useState([]);

    useEffect(() => {
        fetch(props.dataUrl)
            .then((response) => response.json())
            .then((data) => {
                setUrlData(data.filter((item) => item.title.split(" ").length <= 7));
            });
    }, []);

    return (
        <div>
            <div style={{ width: "100%", height: "100vh" }}>
                <AutoSizer>
                    {({ width, height }) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={40}
                            rowCount={urlData.length}
                            rowRenderer={({ key, index, style, parent }) => {
                                const data = urlData[index];
                                return (
                                    <div key={key} style={style}>
                                        <Thumbnail url={data.url} tUrl={data.thumbnailUrl} />
                                    </div>
                                );
                            }}
                        />
                    )}
                </AutoSizer>
            </div>
        </div>
    );
}

export default Data;