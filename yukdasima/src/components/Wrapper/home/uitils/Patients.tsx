
type PatientType = {
     id: number,
     image: string,
}

const Patients = () => {

     const PatientItems:PatientType[] = [
          {
               id: 1,
               image: '../pasha.svg',
          },
          {
               id: 2,
               image: '../ateshgah.png',
          },
          {
               id: 3,
               image: '../pasha.svg',
          },
          {
               id: 4,
               image: '../ateshgah.png',
          },
          {
               id: 5,
               image: '../pasha.svg',
          },
          {
               id: 6,
               image: '../ateshgah.png',
          },
          {
               id: 7,
               image: '../pasha.svg',
          },
     ]

  return (
    <div className='patient-wrappered'>
     <div className="patient-container">
          {PatientItems.map((patient:PatientType, i:number) => (
               <div key={i} className="patient-image-wrapper">
                    <img src={patient.image} alt="" />
               </div>
          ))}
     </div>
    </div>
  )
}

export default Patients