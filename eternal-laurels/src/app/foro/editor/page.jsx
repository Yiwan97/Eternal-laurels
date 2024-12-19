'use Client'
import React, { useRef, useEffect } from 'react';
import ReactQuill from 'react-quill'; 

function MyComponent() {
  const quillRef = useRef(null);
  useEffect(() => {
    if (quillRef.current) {
      // Access the Quill instance
      const quill = quillRef.current.getQuill(); 
      // Example: Add a custom toolbar button
      quill.getToolbar().addHandler('customButton', () => {
        // Handle button click here
      });
    }
  }, []); 

  return (
    <ReactQuill 
      ref={quillRef} 
      theme="snow" 
      modules={{ 
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['blockquote', 'code-block'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'],
        ] 
      }} 
    />
  );
}

export default MyComponent;