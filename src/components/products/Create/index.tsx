import { FC, useState } from 'react';
import {IProductCreate} from '../types';
import InputGroup from "../../common/InputGroup";
import InputGroupFile from "../../common/InputGroupFile";
import { useFormik, Form, FormikProvider, FormikHelpers } from "formik";

const ProductCreatePage : FC = () => {

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); 


  const initialState : IProductCreate = {
    name: "",
    detail: "",
    file: []
  }


  const onHandleSubmit = async (
    values: IProductCreate,
    { setFieldError }: FormikHelpers<IProductCreate>
  ) => {
   console.log("values", values);
   //console.log("values.file", URL.createObjectURL(values.file as any));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).files) {
      setFieldValue("file", e.target.files?.item(0));
    }
  };

  
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: onHandleSubmit,
  });

  const { errors, touched, handleChange, handleSubmit, setFieldError, setFieldValue } = formik;

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Додати продукт</h1>
         
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              {isSubmitted && <h3>Loading ...</h3>}

              <InputGroup
                label="Назва"
                field="name"
                error={errors.name}
                touched={touched.name}
                onChange={handleChange}
              />

              <InputGroup
                label="Опис"
                field="detail"
                type="text"
                error={errors.detail}
                touched={touched.detail}
                onChange={handleChange}
              />

              <InputGroupFile
                label="Фото"
                field="file"
                error={errors.file}
                touched={touched.file}
                onChange={handleFileChange}
              />

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitted}
              >
                Додати товар
              </button>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
};

export default ProductCreatePage;
