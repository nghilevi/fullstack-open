import patientData from '../data/newPatients';
import {Patient} from '../types';
import Utils from '../utils';

const patients:Patient[] = patientData.map( patient => {
    const newPatient = Utils.toNewPatient(patient) as Patient;
    newPatient.id=patient.id;
    return newPatient;
});

const getPatients=():Patient[] => {
    return patients.map(
        ({
            id,name,dateOfBirth,
            gender,ssn,occupation,
            entries
        }) => ({
            id,
            name,
            dateOfBirth,
            gender,
            ssn,
            occupation,
            entries
        })
    );
};

export default {
    getPatients
};