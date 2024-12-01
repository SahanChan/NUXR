export default defineEventHandler(async (event) => {
  //handle query
  const { name } = getQuery(event);

  //handel post
  const { age } = await readBody(event);

  //api ca;ll   cur_live_qM2XnsCPXReta6O1xc2EqKeqPVYwzBi4qjgLXSJh
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_qM2XnsCPXReta6O1xc2EqKeqPVYwzBi4qjgLXSJh"
  );

  return {
    data,
  };
});
