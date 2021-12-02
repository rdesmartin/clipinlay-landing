import React, {useCallback, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import {useDropzone} from 'react-dropzone';
import './VideoFileInput.scss';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export default function VideoFileInput(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    })

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
    isDragActive
  } = useDropzone({accept: 'video/*', onDrop, multiple:false});
  
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Déposez vos fichiers ici ...</p> :
            <p>Glissez-déposez vos fichiers ici, ou clicker pour sélectionner</p>
        }
        {!!acceptedFiles.length && <h4>Fichier sélectionné</h4> }
        <div>
          {acceptedFileItems}
        </div>
      </div>
    </div>
  )
}
