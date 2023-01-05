import { ChangeEvent, useState } from "react";
import axios from "axios";

export default function InvoicesUpload() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }

    let formdata = new FormData();
    formdata.append("file", file);

    const { data: { url } } = await axios.post(
      "https://gmrajoeyc2.execute-api.us-east-1.amazonaws.com/billing/format",
      formdata,
      { headers: { "content-type": "multipart/form-data" } }
    );
    window.open(url);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}
