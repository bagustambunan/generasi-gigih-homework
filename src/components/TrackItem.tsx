import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedTrack } from '../redux/selectedTrackSlice';
import { getDuration } from '../utils/helpers';
import { trackItemType } from '../types';

function Track({
  imageUrl,
  trackTitle,
  artistName,
  albumName,
  duration,
  data,
  setView,
  selectMode,
  highlightTracks,
  setHighlightTracks,
}: trackItemType) {
  const dispatch = useDispatch();
  const [isHighlight, setIsHighlight] = useState(highlightTracks.some((item) => item === data.uri));

  useEffect(() => {
    setIsHighlight(highlightTracks.some((item) => item === data.uri));
  }, [highlightTracks]);

  return (
    <div
      onClick={() => {
        if (selectMode) {
          if (isHighlight) {
            const index = highlightTracks.indexOf(data.uri);
            if (index !== -1) highlightTracks.splice(index, 1);
            setIsHighlight(false);
          } else {
            setHighlightTracks([...highlightTracks, data.uri]);
            setIsHighlight(true);
          }
        } else {
          setView('trackdetail');
          dispatch(updateSelectedTrack(data));
        }
      }}
      className={'track' + (isHighlight ? ' track-highlight' : '')}
    >
      <div className="image">
        <img
          src={imageUrl}
          title={albumName}
          alt="Album"
        />
      </div>

      <div className="title">
        <div className="track-title">
          <span>{trackTitle}</span>
        </div>
        <div className="artist-name">
          <span>
            {artistName}
          </span>
        </div>
      </div>

      <div className="album">
        <span>{albumName}</span>
      </div>

      <div className="duration">
        <span>{getDuration(duration)}</span>
      </div>
    </div>
  );
}

export default Track;
