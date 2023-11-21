export const put = async (data) => {
    const url = process.env.G_FORM_HANDLER;
    const formData = {
        form_id: process.env.G_FORM_ID,
        request: "write",
        responses: data
    };

    let dicts = [{ itemId: '1.63392021E9', value: 'Response 1', field: "text", key: "team_name" },
        { itemId: '2.27649005E8', value: 'Response 2', field: "text", key: "email" },
        { itemId: '7.90080973E8', value: 'Response 3', field: "paragraph", key: "branch" },
        { itemId: '1.770822543E9', value: 'Response 4', field: "text", key: "event" },
        { itemId: '1.846923513E9', value: 'Response 5', field: "paragraph", key: "team_details" }]

    Object.keys(data).forEach(key => {
        let item = dicts.find(item => { return item.key === key});
        item['value'] = data[key];
    });

    formData.responses = dicts;

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