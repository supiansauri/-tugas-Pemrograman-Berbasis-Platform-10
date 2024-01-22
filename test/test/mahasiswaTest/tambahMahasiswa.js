// POST Request mahasiswa
const postData = {
    nim: "200319",
    nama: "Fauzan",
    gender: "L",
    prodi: "TI",
    alamat: "Jl. Kenangan",
  };
  
  fetch(`http://localhost:3000/mahasiswa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then(handleResponse)
    .then((data) => console.log("POST Success:", data))
    .catch(handleError);
  
  //handle response
  function handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  }
  
  //handle error
  function handleError(error) {
    console.error("Request failed:", error.message);
  }