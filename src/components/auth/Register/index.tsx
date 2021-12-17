import React, {useEffect, useRef, useState} from "react";
import {Modal} from 'bootstrap';
import Cropper from 'cropperjs';
import InputGroup from "../../common/InputGroup";

interface IRegisterPage {
  surname: string,
  name: string
};

const RegisterPage = () => {

  let modal: Modal;
  let cropper: Cropper;
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const [model, setModel] = useState<IRegisterPage>({} as IRegisterPage);


  useEffect(() => {
    modal = new Modal(modalRef.current as Element,{
      backdrop: "static",
      keyboard: false
    });
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.show(); 

    cropper = new Cropper(imageRef.current as HTMLImageElement, {
      aspectRatio: 1 / 1,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    }); 
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

      <div className="modal" ref={modalRef} tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
              <div>
                <img ref={imageRef} style={{maxWidth: "100%", display: "block"}} 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48ukN18yyXjwJu00yMd3gd4qVi5sBmOgRLg&usqp=CAU" 
                  alt="girl" />
              </div>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"
                onClick={() =>{
                  cropper.rotate(90);
                }}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
