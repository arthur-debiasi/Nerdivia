import instance from './instance';

const post = async (url, data) => {
  const { data: result } = await instance.post(url, data);
  return result;
};

export default post;
