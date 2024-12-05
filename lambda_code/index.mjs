// Default handler generated in AWS
export const handler = async (event) => {
  const body = JSON.parse(event.body);

  if (body.amount < 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid amount'}),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success'}),
  };
};
