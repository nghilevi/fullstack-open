import { Entry, Gender, NewPatient, Patient} from './types';

// VALIDATIONS
/* eslint-disable @typescript-eslint/no-explicit-any */
const isString=(text:any):text is string =>{
    return typeof text==='string' || text instanceof String;
};

const isDate=(date:string):boolean=>{
    return Boolean(Date.parse(date));
};

const isGender=(gender:any): gender is Gender =>{
    return Object.values(Gender).includes(gender);
};

const isEntry=(entries:any[]): entries is Entry[]=>{
    const acceptedTypes=['HealthCheck','OccupationalHealthcare','Hospital'];
    let result='true';
    entries.forEach((entry:Entry) => {
        if(!acceptedTypes.includes(entry.type)){
        result='false';
        }
    });

    return result==='true';
};

// PARSE DATA
/* eslint-disable @typescript-eslint/restrict-plus-operands */
const parseString=(data:any):string=>{
    if(!data||!isString(data)){
        throw new Error('Incorrect or missing parameter: ' + data);
    }
    return data;
};

const parseDate=(date:any):string=>{
    if(!date || !isString(date) || !isDate(date)){
      throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseGender=(gender:any):Gender=>{
    if(!gender || !isGender(gender)){
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const parseEntries=(entries: any): Entry[]=>{
    if(!entries || !isEntry(entries)){
        throw new Error('Incorrect or missing entries: '+ entries);
    }
    return entries;
};

const toNewPatient = (patient:Patient): NewPatient =>{
    const newPatient: NewPatient = {
      name:parseString(patient.name),
      dateOfBirth:parseDate(patient.dateOfBirth),
      ssn:parseString(patient.ssn),
      gender:parseGender(patient.gender),
      occupation:parseString(patient.occupation),
      entries:parseEntries(patient.entries)
    };
    return newPatient;
};

export default {toNewPatient};