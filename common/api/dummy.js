const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const feeds = [
  {
    "id": 6,
    "category": "음악",
    "title": "음악제목",
    "contents": "음악내용내용"
  },
  {
    "id": 8,
    "category": "음악",
    "title": "음악제목2",
    "contents": "음악내용2"
  },
  {
    "id": 11,
    "category": "음악",
    "title": "음악 사진",
    "contents": "사진 내용"
  }
];

export const getFeeds = async () => {
  await sleep(1000);
  return feeds;
}

export const getFeedById = async (id) => {
  await sleep(1000);
  return feeds.find(feed => feed.id === id);
}