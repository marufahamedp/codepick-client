import React, { useState } from 'react';

const AddBlogs = () => {
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [date, setDate] = useState(new Date());
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentDate = day + '-' + month + '-' + year;
    console.log(currentDate);
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('details', details);
        formData.append('image', image);
        formData.append('postDate', currentDate);

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('blog added successfully')
                    alert('blog added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Blog Name:</label>
                <input
                    id="name"
                    required
                    onChange={e => setName(e.target.value)}
                    type="text"
                />
                <br />
                <label htmlFor="details">Blog Details:</label>
                <br />
                <textarea
                    rows={5}
                    id="details"
                    type="text"
                    required
                    onChange={e => setDetails(e.target.value)}
                />
                <br />
                <label htmlFor="Name">Blog Thumbnail:</label> <br />
                <div class="upload-btn-wrapper">
                    <button class="btn-f"><i class="fas fa-cloud-upload-alt"></i> Upload Thumbnail</button>
                    <input
                    className="upload-image"
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                </div>
               
                <br />
                <div className="text-center">
                <button className="codepickjs-btn w-50 my-4" type="submit">
                    Add Blog
                </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlogs;