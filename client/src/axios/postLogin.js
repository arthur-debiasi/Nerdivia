import instance from './instance';

const postLogin = async (url, data) => {
  const { data: result } = await instance.post(url, data);
  return result;
};

export default postLogin;
