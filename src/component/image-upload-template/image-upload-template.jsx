import './image-upload-template.css';
const ImageUploadTemplate = (props, context) => {
  return (
    <div>
      <input
        style={{ display: "none" }}
        ref={props.inputFile}
        onChange={props.handleFileUpload}
        type="file"
      />
      <div className="button" onClick={props.onButtonClick}>
        Upload Image
      </div>
    </div>
  );
}

export default ImageUploadTemplate;