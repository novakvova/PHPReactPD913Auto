import React, {useState} from "react";
import InputGroup from "../../common/InputGroup";

interface IRegisterPage {
  surname: string,
  name: string
};

const RegisterPage = () => {

  const [model, setModel] = useState<IRegisterPage>({} as IRegisterPage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setModel({
      ...model,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit form", model);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Реєстрація на сайті</h1>
          <form onSubmit={handleSubmit}>
            {/* <InputGroup 
              label="Прізвище"
              field="surname"
              value=""
              errors={[]}
              onChange={handleChange}
            />

            <InputGroup 
              label="Ім'я"
              field="name"
              value=""
              errors={[]}
              onChange={handleChange}
            /> */}

            <button type="submit" className="btn btn-primary">
              Реєстрація
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
