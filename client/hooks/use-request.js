import axios from "axios";
import { useState } from "react";

export default function ({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const { data } = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(data);
      }

      return data;
    } catch (error) {
      setErrors(
        <div className='alert alert-danger mt-3'>
          <h4>Ooops...</h4>
          <ul className='my-0'>
            {error.response.data.errors.map((err, i) => (
              <li key={i}>
                <p>{err.message}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return {
    doRequest,
    errors,
  };
}
