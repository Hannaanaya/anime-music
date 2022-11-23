import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = (props) => {
//     const videoItems = props.videos.map((video) => {
//         return <VideoItem key={video.etag} video={video} />
//     })
//     return (
//         <ul className='VideoList'>
//             {videoItems}
//         </ul>
//     );
// };

const VideoList = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
};

export default VideoList;