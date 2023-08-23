import { useState, useRef } from "react";
import { Widget } from '@uploadcare/react-widget';
import { UPLOADCARE_API_KEY } from "../../config";

export default function UploadImg(){
    // const widgetApi = useRef()
    return (
        <Widget publicKey={UPLOADCARE_API_KEY} id='file' />
    )
}
