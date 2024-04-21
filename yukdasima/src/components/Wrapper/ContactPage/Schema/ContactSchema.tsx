import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
     name_surname: yup.string().required('Ad-Soyad vacibdir.'),
     phone: yup.string().required('Əlaqə nömrəsi vacibdir.'),
     email: yup.string().required('Email vacibdir.'),
     record: yup.string()
})