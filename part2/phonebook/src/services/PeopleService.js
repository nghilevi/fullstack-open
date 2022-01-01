import React from 'react'
import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
        .then(response => {
            return response.data.persons
        })
}

const create = (newPerson) => {
    return axios
      .post(baseUrl, newPerson)
}

const remove = (id) => {
    return axios
      .delete(`${baseUrl}/${id}`)
}

const update = (id, updatedPerson) => {
    return axios
      .put(`${baseUrl}/${id}`,updatedPerson)
      .then((response) => response.data)
}

export default {getAll, create, remove, update}