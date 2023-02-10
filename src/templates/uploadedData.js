const uploadedData = async (url) => {
  try {
    const response = await fetch(`https://course.7t33n.ru/rest/v1/${url}`, {
      method: "GET",
    });
    const result = await response.json();
    return result;

  } catch (error) {
    console.log(error);
  }
};

export default uploadedData;
