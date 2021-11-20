import throttle from 'lodash.throttle';


const refs = {
 form : document.querySelector('.feedback-form'),
}

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput,500));



populateForm();

function onFormInput(evt) {

    formData[evt.target.name] = evt.target.value;
    
    localStorage.setItem('feedback-form',JSON.stringify(formData) );
};

function onFormSubmit(evt) { 
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form');
    
};


function populateForm() {
    const savedData = localStorage.getItem('feedback-form');
    const parsedData = JSON.parse(savedData);
   
        if (parsedData) {           
            refs.form.email.value = parsedData.email;
            refs.form.message.value = parsedData.message;
    };  
    
};

