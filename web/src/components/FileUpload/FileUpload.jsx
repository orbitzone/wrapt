import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './FileUpload.module.scss';

function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Enviar os arquivos para um endpoint de API ou executar qualquer lógica.

    console.log('Arquivos aceitos:', acceptedFiles);
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.dropzone}>
      <h1>Enviar Arquivos</h1>
      <input {...getInputProps()} />
      <p>Arraste e solte arquivos aqui, ou clique para selecionar arquivos.</p>

      <h2>Arquivos Enviados</h2>
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index} className={styles.fileItem}>
            {file.name}
            <img src={file.path} alt={file.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileUpload
