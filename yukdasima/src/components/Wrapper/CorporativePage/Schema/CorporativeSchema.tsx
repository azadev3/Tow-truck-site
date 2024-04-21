import * as yup from 'yup';

export const CorporativeSchema = yup.object().shape({
     name_surname: yup.string().required('Ad-Soyad vacibdir.'),
     voen: yup.string().required('Şirkət VÖEN-i vacibdir.'),
     phone: yup.string().required('Əlaqə nömrəsi vacibdir.'),
     business_name: yup.string().required('Şirkət adı vacibdir.'),
     profession: yup.string().required('Vəzifə vacibdir.'),
     email: yup.string().required('Email vacibdir.'),
})