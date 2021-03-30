export const getData = async (path: string) => {
  const response = await fetch(`${process.env.REACT_APP_API}${path}`);
  return response.json();
};

export const patchData = async (path: string, body: {} = {}) => {
  const response = await fetch(`${process.env.REACT_APP_API}${path}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
