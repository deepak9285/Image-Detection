import React from "react";
import { ImageUp } from "lucide-react";
import Dropzone from "react-dropzone";

export default function DropZone(props) {
  return (
    <Dropzone
      accept={{
        image: [".png", ".jpg", ".jpeg"],
      }}
      onDrop={(acceptedFiles) => props.onfileChange(acceptedFiles[0])}
    >
      {({ getRootProps, getInputProps }) => (
        <section className="file-drop-zone">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="file-drop-zone-text">
              <ImageUp />
              <p>Upload your files here</p>
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
