export const videoIdlist = {
  "Slow Tempo Music": ["K3Qzzggn--s", "dTwj7PhpY9M"],
  "Real Cafe Sound / Asmr": ["sJgNGkfYsH0", "y-jzBmL_X8o&t=1136s"],
  "Lofi Beats": ["5qap5aO4i9A", "DWcJFNfaw9c"],
};

let theme = 0;
let song = 0;

export const getTheme = (idx) => {
  theme = idx;
  song = 0;

  return Object.values(videoIdlist)[theme][song];
};

export const getCurrentSong = () => {
  return Object.values(videoIdlist)[theme][song];
};

export const getNextSong = () => {
  if (song + 1 === Object.values(videoIdlist)[theme].length) {
    song = 0;
  } else {
    song++;
  }

  return Object.values(videoIdlist)[theme][song];
};

export const getPrevSong = () => {
  if (song === 0) {
    song = Object.values(videoIdlist)[theme].length - 1;
  } else {
    song--;
  }

  return Object.values(videoIdlist)[theme][song];
};
