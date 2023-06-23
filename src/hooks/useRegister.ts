import { useNavigate } from "react-router-dom";

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  phone: string;
}

function useRegister() {
  const navigate = useNavigate();
  const handleSubmit = async (registerProps: IRegisterProps) => {
    if (
      !registerProps.name ||
      !registerProps.email ||
      !registerProps.password ||
      !registerProps.phone
    ) {
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: registerProps.email,
      name: registerProps.name,
      phone: registerProps.phone,
      password: registerProps.password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const httpCall = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/sign-up`,
      requestOptions
    );
    const response = await httpCall.json();

    if (httpCall.status === 201) {
      navigate("/");
    }
  };

  return { handleSubmit };
}

export default useRegister;
