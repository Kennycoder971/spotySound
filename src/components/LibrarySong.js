import React from "react";

const LibrarySong = ({
  song: currSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) => {
  const selectSongHandler = () => {
    setCurrentSong(currSong);

    const newSongs = songs.map((song) => {
      if (song.id === currSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if (isPlaying) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      className={`library-song ${currSong.active ? "selected" : ""}`}
      onClick={selectSongHandler}
    >
      <img src={currSong.cover} alt={currSong.name} />
      <div className="song-description">
        <h3>{currSong.name}</h3>
        <h4>{currSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
