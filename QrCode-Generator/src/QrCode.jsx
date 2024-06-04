import { useState } from 'react';
import './QrCode.css';


function QrCode(){
    const [img, setImg] = useState("");
    //here use state returns 2 values onr is a array and another is function
    // now we are maintaning anotherstate which is used to display loading when internet speed is low
    const [loading, setLoading] = useState(false)
    //for qr code generating
    const [qrData, setQrData] = useState("Data");
    //Size for qr code
    const [qrSize, setQrSize] = useState("150");

    async function GenerateQr(){
        //here we are updating the function to our own image
        setLoading(true)
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            // encodeURIComponent used to remove /slashes or symbols/sensitive when we pastes website link directly
            setImg(url);
        }
        catch(error){
            console.log("Error while Generating QR code" ,error);

        }
        finally{
            setLoading(false)
        }
    }
    function DownloadQR(){
        fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error) => {
            console.log("error downloading qrcode ", error);
        });
        
    }
    return(
        <div className="app-container">
            <h1>QR-Code Generator</h1>
            {/* it will render image if the image is present else it will be blank this is known as circuiting */}
            {img && <img src={img} alt="" />}
            {loading && <p>Please wait .....</p>}

            <div>
                <label htmlFor="data-input" className='input-label'>Enter Data for Qr Code</label>
                <input type="text" name="data-input" id="data-input" placeholder='Enter Data For QR-Code'
                 value={qrData} onChange={(e) => setQrData(e.target.value)} />

                <label htmlFor="size-input" className='input-label'>Image Size EX : 120</label>
                <input type="text" name="size-input" id="size-input" placeholder='Enter Image Size' 
                value={qrSize} onChange={(e) => setQrSize(e.target.value)}/>

                <button className='qr-button' onClick={GenerateQr}
                disabled={loading}>Generate Qr code</button>
                {/* it will disable the button when the qr code is loading like when data is low */}
                
                <button className='download-button' onClick={DownloadQR}>Download Qr code</button>
            </div>
            <footer>
                <h4>Designed by *******</h4>
            </footer>

        </div>
    );
}

export default QrCode;