// resources/js/components/AddResourceForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddResourceForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Добавьте другие поля
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/resources', formData);
      console.log(response.data);
      // Обработка успешного ответа, например, обновление интерфейса
    } catch (error) {
      console.error(error);
      // Обработка ошибки, например, вывод сообщения об ошибке
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Field 1:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Field 2:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />
      {/* Добавьте другие поля формы */}
      <br />
      <button type="submit">Добавить ресурс</button>
    </form>
  );
};

export default AddResourceForm;
