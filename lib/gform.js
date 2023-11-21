export const put = async (data) => {
    const url = process.env.G_FORM_HANDLER;
    const formData = {
        form_id: process.env.G_FORM_ID,
        request: "write",
        responses: data
    };

    try {
        return fetch(url, {
            redirect: "follow",
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }).then(async res => {
            return await res.json();
          })
    } catch (error) {
      console.error('Error:', error);
    }
  };