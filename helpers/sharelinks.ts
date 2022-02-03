export const makeTwitterLink = (text: string) => {
  return `https://twitter.com/intent/tweet?text=${text}`;
};

export const makeRedditLink = (text: string) => {
  return `http://www.reddit.com/submit?url=${window.location.href}&title=${text}`;
};
