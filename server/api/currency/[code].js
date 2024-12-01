export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=LKR&apiKey=cur_live_qM2XnsCPXReta6O1xc2EqKeqPVYwzBi4qjgLXSJh}`;

  const { data } = await $fetch(uri);

  return data;
});
